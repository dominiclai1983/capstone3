class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :shipping_address_2
    remove_column :orders, :tracking_number
  end
end
