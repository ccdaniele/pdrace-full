class AddpointsToPods < ActiveRecord::Migration[7.1]
  def change
    add_column :pods, :points, :integer, default: 0
  end
end
