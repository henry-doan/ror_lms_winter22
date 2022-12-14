Rails.application.routes.draw do
  
  namespace :api do
    resources :courses do
      resources :enrollments
    end
    resources :users
  end

end
