class AddBackUserTable < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :is_admin, default: false
      t.integer :current_cart

      t.timestamps
    end
  end
end
