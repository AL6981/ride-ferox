Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :posts, only: [] do
    resources :comments, only: []
  end

  namespace :admin do
    resources :users
    resources :posts
    resources :comments
    root "homepages#index"
    get "*path", to: "homepages#index"
  end

  namespace :api do
    namespace :v1 do
      resources :maps, only: [:index, :create]
      resources :users, only: [:index, :show, :edit, :update]
      resources :posts do
        resources :comments, only: [:show, :create, :edit, :update, :destroy]
      end
    end
  end

  get "*path", to: "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
