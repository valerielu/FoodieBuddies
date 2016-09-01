if current_user.is_host
  json.extract! user, :id, :username, :is_host, :profile, :profile_pic_url, :city_id
else
  json.extract! user, :id, :username, :is_host
end
