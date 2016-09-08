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

100.times do
  User.create!(username: Faker::Name.first_name + Faker::Name.last_name,
  password: Faker::Lorem.characters(10))
end

50.times do
  User.create!(username: Faker::Name.first_name + Faker::Name.last_name,
    password: Faker::Lorem.characters(10), profile_pic_url: Faker::Avatar.image("my-own-slug", "200x200"),
    is_host: true, profile: Faker::Lorem.paragraph(10), city_id: 1 + rand(6),
    first_name: Faker::Name.first_name)
end

host1 = User.create!(username: "FirstHost", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Yawn..jpeg",
  city_id: 1, first_name: "Valerie")
host2 = User.create!(username: "SecondHost", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Happy Corgi")
host3 = User.create!(username: "LilyPad", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Lily")
host4 = User.create!(username: "LindaZhang", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Linda")
host5 = User.create!(username: "JessicaQueen", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Jessica")
host6 = User.create!(username: "Richy0", password: "testing", is_host: true,
  profile: "host story", profile_pic_url: "http://www.pawbuzz.com/wp-content/uploads/sites/551/2014/11/corgi-puppies-21.jpg",
  city_id: 2, first_name: "Richy")

paris = City.create!(name: "Paris", country: "France", lat: 48.8566,
  lng: 2.3522, pic_url: "http://static-v3a.raileurope-world.com/local/cache-vignettes/L760xH507/france-paris_eiffel_tower-_c_prochasson-frederic-shutterstock_102019039-1d869.jpg")
vegas = City.create!(name: "Las Vegas", state: "NV", country: "USA", lat: 36.1699,
  lng: -115.1398, pic_url: "https://timesharepresentationdeals.com/wp-content/uploads/2016/07/vegas-portada-2.jpg")
ny = City.create!(name: "New York", state: "NY", country: "USA", lat: 43.2994,
  lng: -74.2179, pic_url: "https://www.omnihotels.com/-/media/images/hotels/nycber/destinations/nyc-aerial-skyline.jpg?h=660&la=en&w=1170")
sanfran = City.create!(name: "San Francisco", state: "CA", country: "USA", lat: 37.7749,
  lng: -122.4194, pic_url: "https://i.ytimg.com/vi/NA31XYw3dV8/maxresdefault.jpg")
sydney = City.create!(name: "Sydney", country: "Australia", lat: -33.8688,
  lng: 151.2093, pic_url: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178312/Sydney-Opera-House-31126.jpg")
taipei = City.create!(name: "Taipei", country: "Taiwan", lat: 25.0330,
  lng: 121.5654, pic_url: "https://i.ytimg.com/vi/fz1cBwNEUXI/maxresdefault.jpg")

buffet = Event.create!(date_time: DateTime.strptime("10/3/2016 11:00 AM", "%m/%d/%Y %l:%M %p"),
  location: "3570 Las Vegas Boulevard South, Las Vegas, NV 89109", limit: 5, host_id: 6 ,city_id: 2 ,food_type: "American buffet", restaurant: "Bacchanal Buffet", yelp_link: "https://www.yelp.com/biz/bacchanal-buffet-las-vegas-7" ,lat: 36.1167 ,lng: -115.1742)
shakeshack = Event.create!(date_time: DateTime.strptime("10/2/2016 08:00 PM", "%m/%d/%Y %l:%M %p"),
  location: "3790 S Las Vegas Blvd", limit: 7, host_id: 6 ,city_id: 2 ,food_type: "Fast food", restaurant: "Shake Shack")
lotus = Event.create!(date_time: DateTime.strptime("10/13/2016 01:00 PM", "%m/%d/%Y %l:%M %p"),
  location: "953 E Sahara Ave A5, Nevada, NV 89104", limit: 2, host_id: 7 ,city_id: 2 ,food_type: "Thai", restaurant: "Lotus of Siam", yelp_link: "https://www.yelp.com/biz/lotus-of-siam-las-vegas")

restaurant = ["Andytown Coffee Roasters", "Bronze Cafe", "Sweet Spice", "Little Miss BBQ", "Los Andes Restaurant", "Aviva by Kameel", "Copper Top BBQ", "Ono Seafood", "Golden Bear Trading Company", "Dat Cajun Guy", "Big Al's Pizzeria", "Detroit Coney Grill"]
food_type = ["American", "Mexican", "Chinese", "Indian", "Vegan", "Japanese", "Mediterranean", "Fast food", "French", "Vietnamese"]
yelp_link = %w(https://www.yelp.com/biz/bacchanal-buffet-las-vegas-7
http://yelp.com/biz/copper-top-bbq-big-pine
http://yelp.com/biz/art-of-flavors-las-vegas
http://yelp.com/biz/soho-japanese-restaurant-las-vegas
http://yelp.com/biz/shark-pit-maui-lahaina
http://yelp.com/biz/golden-bear-trading-company-san-francisco-3
http://yelp.com/biz/little-miss-bbq-phoenix-2
http://yelp.com/biz/sweet-dogs-miami
http://yelp.com/biz/dat-cajun-guy-haleiwa
http://yelp.com/biz/yoshino-japanese-deli-carlsbad
http://yelp.com/biz/saffron-and-rose-ice-cream-los-angeles
http://yelp.com/biz/andytown-coffee-roasters-san-francisco
)

100.times do
  Event.create!(date_time: Faker::Time.between(DateTime.now + 1, DateTime.now + 100),
  location: Faker::Address.street_address, limit: 2 + rand(8), host_id: 1 + rand(56) ,city_id: 1 + rand(6) ,
  food_type: food_type[rand(9)], restaurant: restaurant[rand(12)],
  yelp_link: yelp_link[rand(12)])
end

Attendance.create!(user_id: 1, event_id: 1)
Attendance.create!(user_id: 1, event_id: 2)
Attendance.create!(user_id: 1, event_id: 3)
Attendance.create!(user_id: 6, event_id: 3)

200.times do
  Attendance.create(user_id: 1 + rand(160), event_id: 1 + rand(103))
end
