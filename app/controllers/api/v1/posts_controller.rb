class Api::V1::PostsController < ApiController

  def index
    render json: Post.all
  end

  def show
    @post = Post.find(params[:id])
    render json: {
      post: @post,
      comments: @post.comments
    }
  end

  def new
    render json: Post.new
  end

  def create
    parsed_post = JSON.parse(request.content.read)
    post = Post.new(title: parsed_post["title"], content: parsed_post["content"])
    post.user = current_user

    if current_user.nil?
      render status: 401
    elsif post.save
      flash[:notice] = 'Post Added Successfully'
      render json: post.id
    else
      flash[:alert] = post.errors.full_messages.join(", ")
      render json: post.id
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(post_params)
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


  def authenticate_user?
    if !user_signed_in? && current_user.id == @post.user_id
      flash[:notice] = 'Unauthorized access - are you signed in?'
      redirect_back(fallback_location: root_path) and return
    end
  end
end
