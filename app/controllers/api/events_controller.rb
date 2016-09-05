class Api::EventsController < ApplicationController

  def index
    hosted_events = Event.where("host_id = ? OR ", current_user.id )
    events = hosted_events
    @events = events.includes(:host, :city, :attendances)
    render :index
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find_by(id: params[:id])
    render :show
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render json: {}
  end

  private

  def event_params
    params.require(:event).permit(date, time, location, limit, food_type, restaurant, yelp_link, lat, lng)
  end

end
