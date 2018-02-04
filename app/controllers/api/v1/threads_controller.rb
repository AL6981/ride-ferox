class Api::V1::ThreadsController < ApiController

  def index
    render json: Thread.all
  end

  def show
    @thread = Thread.find(params[:id])
    render json: {
      thread: @thread,
      comments: @thread.comments
    }
  end
end
