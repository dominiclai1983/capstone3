class AddShippingFeeColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :shipping, :decimal, precision: 10, scale: 2
  end
end
