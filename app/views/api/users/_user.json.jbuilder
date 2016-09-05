if user.is_host
  json.extract! user, :id, :username, :is_host, :profile, :profile_pic_url, :city_id, :first_name
  json.city_name user.city.name
else
  json.extract! user, :id, :username, :is_host
end
