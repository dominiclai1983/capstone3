class Api::CartDetailsController < ApplicationController
  def new_shopping_cart
    cart = ShoppingCart.create
    global_id = cart.to_signed_global_id(expires_in: 1.day)
    session[:active_shopping_cart_id] = global_id.to_s
  end
end
