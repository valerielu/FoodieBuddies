class Api::AttendancesController < ApplicationController
  def create
    @attendance = Attendance.new(attendance_params)
    if @attendance.save
      render "api/attendances/show"
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @attendance = Attendance.find_by(user_id: current_user.id, event_id: params[])
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id)
  end
end
