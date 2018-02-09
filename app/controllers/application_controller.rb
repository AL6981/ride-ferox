class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :configure_sign_up_params, if: :devise_controller?
  protect_from_forgery with: :exception

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :moto, :location])
  end

end
