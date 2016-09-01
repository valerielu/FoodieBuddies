# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  date        :date             not null
#  time        :time             not null
#  location    :string           not null
#  limit       :integer          not null
#  host_id     :integer          not null
#  city_id     :integer          not null
#  food_type   :string
#  description :text
#  yelp_link   :string
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord

  belongs_to :city

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :attendances

end
