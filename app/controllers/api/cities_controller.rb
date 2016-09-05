class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render :index
  end

  def show
    city = City.find_by(id: params[:id])
    @city = city.includes(:hosts, :events)
    render :show
  end
end
