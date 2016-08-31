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
