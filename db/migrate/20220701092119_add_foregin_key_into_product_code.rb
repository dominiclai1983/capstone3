class AddForeginKeyIntoProductCode < ActiveRecord::Migration[6.1]
  def change
    add_reference :product_codes, :product, foreign_key: true
  end
end
