json.extract! event, :id, :date, :time, :location, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng
json.host_name event.host.first_name
json.host_prof_pic_url event.host.prof_pic_url
json.city_name event.city.name
json.attendees event.attendances.pluck(:user_id)
