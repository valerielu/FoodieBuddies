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
end
