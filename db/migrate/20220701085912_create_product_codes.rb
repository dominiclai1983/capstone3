class CreateProductCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :product_codes do |t|
      t.string :category_code
      t.string :category_desc

      t.timestamps
    end
  end
end
