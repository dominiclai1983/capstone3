class AddAndReplaceForeignKey < ActiveRecord::Migration[6.1]
  def change
    remove_reference :product_codes, :product, foreign_key: true
    add_reference :products, :product_code, foreign_key: true
    remove_column :product_codes, :category_code
    remove_column :product_codes, :category_desc
  end
end
