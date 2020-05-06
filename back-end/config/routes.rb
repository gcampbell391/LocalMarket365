Rails.application.routes.draw do
  get 'purchases/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/products", to: "products#index"
  get "/users", to: "users#index"

  get '/purchases', to: "purchases#index"

  resources :users
  get '/log_in', to: 'users#log_in'
  post 'users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  post '/login', to: 'sessions#create'



  post "/purchases/new", to: "purchases#create" 
 


end
