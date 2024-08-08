Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    resources :users
      get '/users', to: 'users#index'
      get '/users', to: 'users#show'
      get '/user/random', to: 'users#setRandomUser'
      post '/users', to: 'users#destroy'
      post '/users', to: 'users#create'

    end
    namespace :v2 do
    resources :users, :pods, :events, :events_users
      get '/users', to: 'users#index'
      get '/user/random', to: 'users#setRandomUser'
      get '/user/top', to: 'users#top'
      post '/users', to: 'users#create'
      post '/users/delete', to: 'users#destroy'
      get '/pods', to: 'pods#index'
      post '/pods', to: 'pods#create'
      post '/pods', to: 'pods#destroy'
      get '/events', to: 'events#index'
      post '/events', to: 'events#create'
      post '/events', to: 'events#destroy'
    end
  end
end
