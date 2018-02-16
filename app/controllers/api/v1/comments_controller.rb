class Api::V1::CommentsController < ApiController

  def index
  end

  def show
  end

  def new
  end

  def create
    post = Post.find(params[:post_id])
    comment = Comment.new(comment_params)
    comment.user = current_user
    comment.post = post

    if current_user.nil?
      render status: 401
    elsif comment.save
      flash[:notice] = 'Comment Added Successfully'
      render json: post.comments
    else
      flash[:alert] = comment.errors.full_messages.join(", ")
      render json: post.comments
    end
  end

  def edit
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
