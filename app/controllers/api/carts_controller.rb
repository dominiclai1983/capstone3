class Api::CartsController < ApplicationController
=begin
  def create
    token = cookies.signed[:ecommerce_session_token]
    session = Session.find_by(token: token)

    if !session
      return render json: { error: "user not logged in" }, status: :unauthorized
    end

    if current_cart?
      @cart = Cart.create({ user_id: session.user.id })
    else
      @cart = session.user.current_cart
    end
  end
=end
end
