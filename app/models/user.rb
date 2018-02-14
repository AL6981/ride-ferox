class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :posts
  has_many :comments

  acts_as_mappable :auto_geocode=>{:field=>:location, :error_message=>'Could not geocode address'}

  def admin?
    role == "admin"
  end

  def member?
    role == "member"
  end

end
