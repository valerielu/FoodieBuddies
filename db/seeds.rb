# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: "JaneDoe", password: "testing")
user2 = User.create!(username: "valerie", password: "testing")
user3 = User.create!(username: "valerie2", password: "testing")
user4 = User.create!(username: "valerie3", password: "testing")

host1 = User.create!(username: "FirstHost", password: "testing", is_host: true, profile: "host story", profile_pic_url: "test/123", city_id: 1)
host2 = User.create!(username: "SecondtHost", password: "testing", is_host: true, profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg", city_id: 2)

paris = City.create!(name: "Paris", state: "", country: "France", lat: 48.8566, lng: 2.3522, pic_url: "http://static-v3a.raileurope-world.com/local/cache-vignettes/L760xH507/france-paris_eiffel_tower-_c_prochasson-frederic-shutterstock_102019039-1d869.jpg")
vegas = City.create!(name: "Las Vegas", state: "NV", country: "USA", lat: 36.1699, lng: -115.1398, pic_url: "https://timesharepresentationdeals.com/wp-content/uploads/2016/07/vegas-portada-2.jpg")
ny = City.create!(name: "New York", state: "NY", country: "USA", lat: 43.2994, lng: -74.2179, pic_url: "https://www.omnihotels.com/-/media/images/hotels/nycber/destinations/nyc-aerial-skyline.jpg?h=660&la=en&w=1170")
sanfran = City.create!(name: "San Francisco", state: "CA", country: "USA", lat: 37.7749, lng: -122.4194, pic_url: "https://i.ytimg.com/vi/NA31XYw3dV8/maxresdefault.jpg")
sydney = City.create!(name: "Sydney", state: "", country: "Australia", lat: -33.8688, lng: 151.2093, pic_url: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178312/Sydney-Opera-House-31126.jpg")
taipei = City.create!(name: "Taipei", state: "", country: "Taiwan", lat: 25.0330, lng: 121.5654, pic_url: "https://i.ytimg.com/vi/fz1cBwNEUXI/maxresdefault.jpg")
