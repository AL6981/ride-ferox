require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password 'password'
    password_confirmation 'password'
  end

  factory :thread do
    title 'First post'
    content 'I am planning a trip to Tahoe'
    association(:user)
  end
end
