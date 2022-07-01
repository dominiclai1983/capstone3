class AddDefaultOnProduct < ActiveRecord::Migration[6.1]
  def change
    change_column_default :products, :available, 0
    change_column_default :products, :reserved, 0
  end
end
