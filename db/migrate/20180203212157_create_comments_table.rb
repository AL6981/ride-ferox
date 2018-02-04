class CreateCommentsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :comments_tables do |t|
      t.text :body, null: false
      t.belongs_to :user
      t.belongs_to :thread

      t.timestamps
    end
  end
end
