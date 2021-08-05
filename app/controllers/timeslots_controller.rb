class TimeslotsController < ApplicationController
  def index
    @timeslot = Timeslot.all
    render json: @timeslot
  end
  
  # def show
  #   render json: @timeslot
  # end

  # def create
  #   @timeslot = Timeslot.create(timeslot_params)

  #   if @timeslot
  #     render json: @timeslot, status: :created, location: @timeslot
  #   else
  #     render json: @timeslot.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  # def update
  #   if @timeslot.update(timeslot_params)
  #     render json: @timeslot
  #   else
  #     render json: @timeslot.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  def destroy
    timeslot = Timeslot.find(params[:id])
    timeslot.destroy
  end

  private

  # def set_timeslot
  #   @timeslot = Timeslot.find(params[:id])
  # end

  
  def timeslot_params
      params.require(:timeslot).permit(:worker_id, :date_time)
  end
end
