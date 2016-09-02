class Api::EventsController < ApplicationController


  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
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
