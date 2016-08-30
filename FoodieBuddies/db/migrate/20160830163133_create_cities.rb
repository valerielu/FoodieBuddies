class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :state
      t.string :country, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
  end
end
