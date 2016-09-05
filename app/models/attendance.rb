# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendance < ApplicationRecord
  validates :user, :event, presence: true
  validates_uniqueness_of :user_id, scope: :event_id

  belongs_to :event
  belongs_to :user

  has_one :city,
  through: :event,
  source: :city
end
