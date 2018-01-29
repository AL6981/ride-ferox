class ThreadsController < ApplicationController
  before_action :authorize_user?, except: [:index, :show]

  def index
    @threads = Thread.all
  end

  def show
    @thread = Thread.find(params[:id])
  end

  def new
    @thread = Thread.new
  end

  def create
    @thread = Thread.new(thread_params)
    @thread.user = current_user

    if @thread.save
      flash[:notice] = 'Thread added successfully'
      redirect_to thread_path(@thread)
    else
      render :new
    end
  end

  protected

  def thread_params
    params.require(:thread).permit(:title, :content, :tags)
  end

  def authorize_user?
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = 'Unauthorized access'
      redirect_back(fallback_location: root_path) and return
    end
  end
end
