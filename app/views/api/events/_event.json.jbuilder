json.extract! event, :id, :date_time, :location, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng
json.host_name event.host.first_name
json.host_profile_pic_url event.host.profile_pic_url
json.city_name event.city.name
json.attendees event.attendances.pluck(:user_id)

# Date.strftime("%b %e %Y %a") Time.strftime("%l:%M %p")
