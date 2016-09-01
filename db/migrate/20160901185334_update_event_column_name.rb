class UpdateEventColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :events, :description, :restaurant
    change_column :events, :restaurant, :string

  end
end
