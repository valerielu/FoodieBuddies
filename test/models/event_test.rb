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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
