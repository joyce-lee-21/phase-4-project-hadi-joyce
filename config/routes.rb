Rails.application.routes.draw do
  resources :services, :customers, :timeslots, :users, :workers
  resources :appointments do
    
    get :summary, on: :collection

  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  get '/users', to: "users#index" #USED FOR BACKEND CHECKS
  get '/appointments', to: "appointments#index"  #USED FOR BACKEND CHECKS
  get '/me', to: "users#show" #USED

  # User login
  post '/login', to: 'sessions#create' #USED

  # User logout
  delete '/logout', to: 'sessions#destroy' #USED

  # Signup
  post '/users', to: 'users#create' #USED

  # Account
  # get '/account/:id', to: 'users#show'
  patch '/account/:id', to: "users#update" #USED
  
  # Homepage
  # workers list
  get '/workers', to: 'workers#index'
  # submit appointment request
  post '/home/:id', to: 'appointments#create'
  # get upcoming appointments
  get '/home/:id', to: 'appointments#show' #USED
  # complete appointment
  patch '/home/:id', to: 'appointments#update'

  # Dashboard
  # accept appointment request
  patch '/home', to: 'appointments#update'
  delete '/timeslots', to: 'timeslots#destroy'

end
