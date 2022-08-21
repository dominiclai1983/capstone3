class CreateGuestCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :guest_carts do |t|

      t.timestamps
    end
  end
end
