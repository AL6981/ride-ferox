class ThreadsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def index
    @threads = Thread.all
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
end
