class CreateUpdatePostsTable < ActiveRecord::Migration[5.1]
  def change
    def up
      change_column :posts, :content, :string, null: false
    end
    def down
      change_column :posts, :body, :string, null: false
    end
  end
end
