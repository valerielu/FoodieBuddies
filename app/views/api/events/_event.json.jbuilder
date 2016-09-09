json.extract! event, :id, :address, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng
json.host_name event.host.first_name
json.host_profile_pic_url event.host.profile_pic_url
json.city_name event.city.name
json.attendees event.attendances.pluck(:user_id)
json.readable_date_time event.date_time.strftime("%A %^b-%d-%Y %I:%M%p")
json.date_time event.date_time
