Rails.application.routes.draw do
  get 'purchases/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/products", to: "products#index"
  get "/users", to: "users#index"

  post "/purchases/new", to: "purchases#create" 
 
end
