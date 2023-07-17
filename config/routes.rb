Rails.application.routes.draw do
  devise_for :users
  resources :passwords do
    resources :shares, only: [:new, :create, :destroy] #user_passwords
  end

  root "passwords#index"
end
