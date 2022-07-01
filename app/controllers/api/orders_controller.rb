class Api::OrdersController < ApplicationController
  def create
    if !session
      return render json: { error: "user not logged in" }, status: :unauthorized
    end

    now = DateTime.current
    id = session.user.id

    begin
      @order =
        Order.create(
          {
            user_id: id,
            order_date: now,
            recipient_name: params[:order][:recipient_name],
            shipping_address_1: params[:order][:shipping_address_1],
            shipping_address_2: params[:order][:shipping_address_2],
            postal_code: params[:order][:postal_code],
            city: params[:order][:city],
            country: params[:order][:country],
            phone_number: params[:order][:phone_number]
          }
        )
      render "api/orders/create", status: :created
    rescue ArgumentError => e
      render json: { error: e.message }, status: :bad_request
    end
  end

  def index
    if session
      @orders = session.user.orders
      render "api/orders/index"
    else
      render json: { orders: [] }
    end
  end

  def edit_order_by_order_id
    if session and is_admin?
      @order = Order.find(params[:id])

      if !@order.status and @order.update(order_params)
        render "api/orders/show", status: :ok
      else
        render json: { order: [] }
      end
    else
      render json: { order: [] }
    end
  end

  def report_tracking_number_by_order_id
    if session and is_admin?
      @order = Order.find(params[:id])
      #status = @order.status
      #payment_status = @order.payment_status

      #if !status and

      now = DateTime.current

      if @order.update(
           {
             tracking_number: params[:order][:tracking_number],
             status: true,
             shipping_date: now
           }
         )
        render "api/orders/show", status: :ok
      else
        render json: { order: [] }
      end
    else
      render json: { order: [] }
    end
  end

  #TODO: deduct shipping quantity method

  private

  def deduct_quantity(order_details)
    order_details.each { |item| }
  end

  def order_params
    params.require(:order).permit(
      :recipient_name,
      :shipping_address_1,
      :shipping_address_2,
      :postal_code,
      :city,
      :country,
      :phone_number,
      :tracking_number
    )
  end

  def session
    token = cookies.signed[:ecommerce_session_token]
    session = Session.find_by(token: token)
  end

  def is_admin?
    session.user.is_admin?
  end
end
