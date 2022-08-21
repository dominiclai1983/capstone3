class CreateGuestCartDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :guest_cart_details do |t|

      t.timestamps
    end
  end
end
