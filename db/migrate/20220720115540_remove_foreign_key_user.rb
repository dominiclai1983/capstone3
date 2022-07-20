class RemoveForeignKeyUser < ActiveRecord::Migration[6.1]
  def change
    remove_reference :orders, :user, index: true, foreign_key: true
    remove_reference :sessions, :user, index: true, foreign_key: true
  end
end
