Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
  end

  post '/api/session', to: "api/session#create"
  delete '/api/session', to: "api/session#destroy"

end
