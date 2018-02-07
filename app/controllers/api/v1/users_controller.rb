class Api::V1::UsersController < ApiController

  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    render json: {
      user: @user
    }
  end

end
