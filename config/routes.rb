Boilerplate::Application.routes.draw do

  # The priority is based upon order of creation:
  # earlier in this file -> higher priority.

  root to: 'home#index', as: :home
  get '/concerts' => 'concerts#index'

end
