class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :current_order, :current_cart
  end
end
