class AddBackCartDetailTable < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_details do |t|
      t.decimal :price, precision: 10, scale: 2
      t.decimal :total, precision: 10, scale: 2
      t.integer :quantity
      t.timestamps

      t.belongs_to :cart, index: true, foreign_key: true
      t.belongs_to :product, index: true, foreign_key: true
    end
  end
end
