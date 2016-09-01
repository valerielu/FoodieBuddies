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

paris = City.create!(name: "Paris", state: "", country: "France", lat: 48.8566, lng: 2.3522)
vegas = City.create!(name: "Las Vegas", state: "NV", country: "USA", lat: 36.1699, lng: -115.1398)
ny = City.create!(name: "New York", state: "NY", country: "USA", lat: 43.2994, lng: -74.2179)
sanfran = City.create!(name: "San Francisco", state: "CA", country: "USA", lat: 37.7749, lng: -122.4194)
sydney = City.create!(name: "Sydney", state: "", country: "Australia", lat: -33.8688, lng: 151.2093)
taipei = City.create!(name: "Taipei", state: "", country: "Taiwan", lat: 25.0330, lng: 121.5654)
