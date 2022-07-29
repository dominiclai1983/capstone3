class AddForeginKeyToCartItem < ActiveRecord::Migration[6.1]
  def change
    add_reference :cart_details, :product, foreign_key: true
  end
end
