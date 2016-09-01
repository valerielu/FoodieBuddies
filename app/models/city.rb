# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  state      :string
#  country    :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, :country, :lat, :lng, presence: true

  has_many :hosts,
  primary_key: :id,
  foreign_key: :city_id,
  class_name: :City

  has_many :events

end
