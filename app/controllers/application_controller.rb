class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
#  before_action :configure_sign_up_params, if: :devise_controller?
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    if current_user.has_completed_profile?
      request.env['omniauth.origin'] || root_path
    else
      "/users/#{current_user.id}/edit"
    end

  end

#  def configure_sign_up_params
#    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :moto, :location])
#  end

end
