class AddTableAddressAndRemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :recipient_name
    remove_column :orders, :shipping_address_1
    remove_column :orders, :postal_code
    remove_column :orders, :city
    remove_column :orders, :country
    remove_column :orders, :phone_number
    remove_column :orders, :user
  end
end
