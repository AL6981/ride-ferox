class DropCommentsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :comments do |t|
      t.text :body, null: false
      t.belongs_to :user
      t.belongs_to :thread

      t.timestamps
    end
  end
end
