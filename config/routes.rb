Rails.application.routes.draw do
  devise_for :users

  resources :posts, only: [] do
    resources :comments, only: []
  end

  namespace :admin do
    resources :users
    resources :posts
    root "homepages#index"
    get "*path", to: "homepages#index"
  end

  namespace :api do
    namespace :v1 do
      resources :posts do
        resources :comments
      end
    end
  end

  root 'homes#index'
  get "*path", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
