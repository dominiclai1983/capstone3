class DeleteCartTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :cart_details
  end
end
