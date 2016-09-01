class AddColumnToCity < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :pic_url, :string
  end
end
