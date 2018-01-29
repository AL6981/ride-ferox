class PostsController < ApplicationController
  before_action :authorize_user?, except: [:index, :show]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user

    if @post.save
      flash[:notice] = 'Post added successfully'
      redirect_to post_path(@post)
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(superpower_params)
      flash[:notice] = 'Post successfully updated'
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    flash[:success] = 'Post successfully deleted'
    redirect_to posts_path
  end
  protected

  def post_params
    params.require(:post).permit(:title, :content, :tags)
  end

  def authorize_user?
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = 'Unauthorized access'
      redirect_back(fallback_location: root_path) and return
    end
  end
end
