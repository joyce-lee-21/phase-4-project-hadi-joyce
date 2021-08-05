Rails.application.routes.draw do
  resources :services, :customers, :timeslots, :users, :workers
  resources :appointments do
    
    get :summary, on: :collection

  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  # User login
  get '/users', to: "users#index"
  post '/login', to: 'sessions#create'
  

  # Signup
  
end
