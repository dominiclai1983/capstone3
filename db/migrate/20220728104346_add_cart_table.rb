class AddCartTable < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
