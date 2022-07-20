class AddBackOrderTables < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.datetime :order_date
      t.datetime :shipping_date
      t.boolean :status, default: false
      t.boolean :payment_status, default: false
      t.string :tracking_number, default: nil
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
