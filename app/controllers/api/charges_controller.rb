class Api::ChargesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:mark_complete]

  def create
    token = cookies.signed[:airbnb_session_token]
    session = Session.find_by(token: token)
    if !session
      return(
        render json: { error: "user not logged in" }, status: :unauthorized
      )
    end

    order_details = OrderDetail.where(order_id: params[:id])
    if !order_details
      return render json: { error: "cannot find order" }, status: :not_found
    end

    total = order_details.sum(:total)

    session =
      Stripe::Checkout::Session.create(
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Payment for Order#{params[:id]}",
            description: "Your payment for Order#{params[:id]} on the site.",
            amount: (total * 100.0).to_i, # amount in cents
            currency: "usd"
          }
        ],
        success_url: "#{ENV["URL"]}/order/#{params[:id]}/success",
        cancel_url: "#{ENV["URL"]}#{params[:cancel_url]}"
      )

    @charge =
      booking.charges.new(
        { checkout_session_id: session.id, currency: "usd", amount: amount }
      )

    if @charge.save
      render "api/charges/create", status: :created
    else
      render json: {
               error: "charge could not be created"
             },
             status: :bad_request
    end
  end

  def mark_complete
    # You can find your endpoint's secret in your webhook settings
    endpoint_secret = ENV["STRIPE_MARK_COMPLETE_WEBHOOK_SIGNING_SECRET"]
    payload = request.body.read
    event = nil
    # Verify webhook signature and extract the event
    # See https://stripe.com/docs/webhooks/signatures for more information.
    sig_header = request.env["HTTP_STRIPE_SIGNATURE"]
    begin
      event =
        Stripe::Webhook.construct_event(payload, sig_header, endpoint_secret)
    rescue JSON::ParserError => e
      # Invalid payload
      return head :bad_request
    rescue Stripe::SignatureVerificationError => e
      # Invalid signature
      return head :bad_request
    end
    # Handle the checkout.session.completed event
    if event["type"] == "checkout.session.completed"
      session = event["data"]["object"]
      # Fulfill the purchase, mark related charge as complete
      charge = Charge.find_by(checkout_session_id: session.id)
      return head :bad_request if !charge #|| !order_details
      charge.update({ complete: true })
      #TODO: get all the item by using Order.find(order_id).order_deatils
      #TODO: order_details update reserved quantity
      return head :ok
    end
    return head :bad_request
  end
end