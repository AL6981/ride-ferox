class Api::V1::UsersController < ApiController
include Geokit::Geocoders
  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
    render json: {
      user: @user,
      current_user: current_user.id
    }
  end

  def update
    @user = User.find(params[:id])
    geo=MultiGeocoder.geocode(user_params[:location])
    new_attributes=user_params
    new_attributes[:lat]=geo.lat
    new_attributes[:lng]=geo.lng
    if @user.update_attributes(new_attributes)
      render json: { message: 'User info updated!'}
    else
      render json: { error: 'NOPE' }
    end
  end

  protected

  def user_params
    params.require(:user).permit(:username, :location, :moto, :lat, :lng)
  end

  def authenticate_user?
    if !user_signed_in? && @user.id == @user_id
      flash[:notice] = 'Unauthorized access - are you signed in?'
      redirect_back(fallback_location: root_path) and return
    end
  end

end
