class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.string :address, null: false
      t.integer :limit, null: false
      t.integer :host_id, null: false, index: true
      t.integer :city_id, null: false, index: true
      t.string :food_type
      t.text :description
      t.string :yelp_link
      t.float :lat
      t.float :lng
      t.timestamps
    end
  end
end
