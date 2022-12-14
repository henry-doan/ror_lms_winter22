Rails.application.routes.draw do
  
  namespace :api do
    resources :courses do
      resources :enrollments
      #custom route to get to our custom action in the controller
      get '/avausers', to: 'enrollments#avausers'
    end
    resources :users
  end

end
