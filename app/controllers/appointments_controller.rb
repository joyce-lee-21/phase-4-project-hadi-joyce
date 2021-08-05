class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]
  before_action :authorize
  def index
    status= params[:status]

    @appointments = status ? current_user.profile.appointments.where(status: status) : current_user.profile.appointments.all

    render json: @appointments
  end
 
  def show
    render json: @appointment
  end

  def create
    @appointment = Appointment.create(appointment_params)
    if @appointment
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
  end

  def summary
    confirmed_appointments= current_user.profile.appointments.where(status: :confirmed)
    total_cost  =  confirmed_appointments.sum(:total_cost)
    tips = confirmed_appointments.sum(:tip)
    return render json: {total_cost: total_cost, tips: tips}
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end
  
  def appointment_params
    params.require(:appointment).permit(:worker_id, :customer_id, :time, :services, :total_cost, :tip, :rating, :review, :status)
  end
end
