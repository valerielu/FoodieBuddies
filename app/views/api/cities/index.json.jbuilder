@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :state, :country
  end
end
