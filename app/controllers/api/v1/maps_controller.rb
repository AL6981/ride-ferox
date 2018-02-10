class Api::V1::MapsController < ApiController

  def index
  end

  def create
    @starting = Geokit::Geocoders::GoogleGeocoder.geocode(params[:startingLocation])
    @ending = Geokit::Geocoders::GoogleGeocoder.geocode(params[:endingLocation])

    if current_user.nil?
      render status: 401
    elsif @starting.save
      flash[:notice] = 'Map Updated Successfully'
      render json: {
        starting: @starting,
        ending: @ending
      }
    else
      flash[:alert] = map.errors.full_messages.join(", ")
      render json:
    end

end
