class Api::V1::CommentsController < ApiController

  def index
  end

  def show
  end

  def create
    post = Post.find(params[:post_id])
    parsed_comment = JSON.parse(request.body.read)
    comment = Comment.new(body: parsed_comment["body"])
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
end
