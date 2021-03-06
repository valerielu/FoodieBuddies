# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  date_time  :datetime         not null
#  location   :string           not null
#  limit      :integer          not null
#  host_id    :integer          not null
#  city_id    :integer          not null
#  food_type  :string
#  restaurant :string
#  yelp_link  :string
#  lat        :float
#  lng        :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
  validates :date_time, :restaurant, :address, :limit, :host_id, :city_id, presence: true
  validates :limit, numericality: { greater_than_or_equal_to: 2, less_than_or_equal_to: 9 }
  validate :events_cannot_be_in_past

  belongs_to :city

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :attendances, dependent: :destroy

  has_many :attendees,
  through: :attendances,
  source: :user

  def events_cannot_be_in_past
    if self.date_time && self.date_time <= Time.now
      self.errors[:date_time] << "has to be in the future"
    end
  end

  def self.parse_date_time_input(time)
    # Time.iso8601(date_time) => in iso serialized string
    # new Date (date_time) => in iso serialized string
    DateTime.strptime(time, "%Y-%m-%d %l:%M %P")
  end

end
