module Admin
  class UsersController < ApplicationController
    before_action :authorize_user

    def index
      @users = User.all
    end

    def destroy
      User.find(params[:id]).destroy
      flash[:success] = 'Success'
      redirect_to admin_users_path
    end

    protected

    def authorize_user
      if !user_signed_in? || !current_user.admin?
        flash[:notice] = 'Unauthorized view'
        redirect_back(fallback_location: root_path) and return
      end
    end
  end
end
