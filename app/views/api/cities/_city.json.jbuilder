json.extract! city, :id, :name, :state, :country, :pic_url

if show_details
  json.extract! city, :lat, :lng
  json.events do
    city.events.each do |event|
      json.set! event.id do
        json.partial! "api/events/event", event: event
      end
    end
  end
  json.hosts do
    city.hosts.each do |host|
      json.set! host.id do
        json.partial! "api/users/user", user: host
      end
    end
  end
end
