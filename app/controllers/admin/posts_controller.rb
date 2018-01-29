module Admin
  class PostsController < ApplicationController
    before_action :authorize_user

    def index
      @posts = Post.all
    end

    def destroy
      Post.find(params[:id]).destroy
      flash[:success] = 'Post successfully deleted'
      redirect_to admin_posts_path
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
