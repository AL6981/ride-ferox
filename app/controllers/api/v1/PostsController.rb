class Api::V1::PostsController < ApplicationController
  serialization_scope :current_user

  def index
    render json: Post.all
  end

  def show
    render json: @post = Post.find(params[:id])
  end
end
