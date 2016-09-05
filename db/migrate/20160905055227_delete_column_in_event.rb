class DeleteColumnInEvent < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :time
    rename_column :events, :date, :date_time
    change_column :events, :date_time, :datetime
  end
end
