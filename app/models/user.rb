class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :omniauthable, :omniauth_providers => [:facebook]
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts
  has_many :comments


  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      #user.username = auth.info.name
    end

    if user.userimage.blank? && auth.info.image.present?
      user.userimage = auth.info.image
      user.save!
    end
    user
  end

  def admin?
    role == "admin"
  end

  def member?
    role == "member"
  end

  def has_completed_profile?
    username.blank? || location.blank?
  end

end
