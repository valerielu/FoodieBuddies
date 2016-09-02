# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  is_host         :boolean          default(FALSE)
#  profile         :text
#  profile_pic_url :string
#  city_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :host_profile_completion

  belongs_to :city, optional: true

  has_many :attendances, dependent: :destroy

  has_many :attending_events,
  through: :attendances,
  source: :event

  has_many :hosted_events, dependent: :destroy,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :Event

  attr_reader :password

  after_initialize :ensure_session_token

  def host_profile_completion
    if self.is_host
      self.errors[:profile] << "Profile can't be blank" unless self.profile
      self.errors[:first_name] << "First name can't be blank" unless self.profile
      self.errors[:city_id] << "City can't be blank" unless self.city_id
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username);
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
  end

end
