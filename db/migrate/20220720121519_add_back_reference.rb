class AddBackReference < ActiveRecord::Migration[6.1]
  def change
    add_reference :orders, :user, index: true, foreign_key: true
    add_reference :sessions, :user, index: true, foreign_key: true
  end
end
