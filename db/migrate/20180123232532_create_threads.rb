class CreateThreads < ActiveRecord::Migration[5.1]
  def change
    create_table :threads do |t|
      t.string :title, null: false
      t.string :tags
      t.text :content, null: false

      t.belongs_to :user 

      t.timestamps null: false
    end
  end
end
