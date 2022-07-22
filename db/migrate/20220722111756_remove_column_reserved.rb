class RemoveColumnReserved < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :available
    remove_column :order_details, :reserved
    remove_column :order_details, :shipped
  end
end
