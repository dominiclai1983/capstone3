class AddAddressTable < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :first_name
      t.string :last_name
      t.string :billing_email
      t.string :phone_number
      t.string :address_1
      t.string :address_2
      t.string :district
      t.string :region

      t.boolean :is_billing
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
