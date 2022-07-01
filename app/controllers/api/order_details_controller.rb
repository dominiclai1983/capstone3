class Api::OrderDetailsController < ApplicationController
  def create
    if !session
      return render json: { error: "user not logged in" }, status: :unauthorized
    end

    total = params[:order_detail][:quantity] * params[:order_detail][:price]

    begin
      @order_detail =
        OrderDetail.create(
          {
            order_id: params[:order_detail][:order_id],
            product_id: params[:order_detail][:product_id],
            price: params[:order_detail][:price],
            quantity: params[:order_detail][:quantity],
            total: total
          }
        )
      render "api/order_details/show", status: :created
    rescue ArgumentError => e
      render json: { error: e.message }, status: :bad_request
    end
  end

  def get_order_details_by_order_id
    if session
      @order_details = OrderDetail.where(order_id: params[:order])
      render "api/order_details/index", status: :ok
    else
      render json: { order_details: [] }
    end
  end

  private

  def order_detail_params
    params.require(:order_detail).permit(
      :order_id,
      :product_id,
      :price,
      :quantity
    )
  end

  def session
    token = cookies.signed[:ecommerce_session_token]
    session = Session.find_by(token: token)
  end
end
