class AddColumnToTableUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :current_cart, :integer
  end
end
