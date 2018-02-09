class CreateAddColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :lat, :decimal, precision: 9, scale: 6
    add_column :users, :lng, :decimal, precision: 9, scale: 6
  end

end
