class AddColumnBackToProductCode < ActiveRecord::Migration[6.1]
  def change
    add_column :product_codes, :code, :string
    add_column :product_codes, :desc, :string
  end
end
