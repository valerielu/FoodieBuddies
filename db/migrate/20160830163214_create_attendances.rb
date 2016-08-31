class CreateAttendances < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.integer :user_id, null: false, index: true
      t.integer :event_id, null: false, index: true
      t.timestamps
    end
  end
end
