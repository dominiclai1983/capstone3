class AddGuestTables < ActiveRecord::Migration[6.1]
  def change
    create_table :guest_carts do |t|
      t.timestamps
    end

    create_table :guest_cart_details do |t|
      t.decimal :price, precision: 10, scale: 2
      t.decimal :total, precision: 10, scale: 2
      t.integer :quantity
      t.timestamps

      t.belongs_to :guest_cart, index: true, foreign_key: true
      t.belongs_to :product, index: true, foreign_key: true
    end
  end
end
