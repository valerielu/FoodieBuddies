@cities.each do |city|
  json.set! city.id do
    json.partial! "api/cities/city", city: city, show_details: false
  end
end
