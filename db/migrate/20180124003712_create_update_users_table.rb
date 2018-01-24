class CreateUpdateUsersTable < ActiveRecord::Migration[5.1]
  def up
    remove_column :users, :location, :string
  end
  def down
    remove_column :users, :location, :string, null: false
  end
end
