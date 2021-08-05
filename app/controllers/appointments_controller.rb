class AppointmentsController < ApplicationController
  # before_action :set_appointment, only: [:show, :update, :destroy]
 
  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      appointments = user.appointments
      render json: appointments, status: :ok
    else
      render json: {error: "No such user"}, status: :not_found
    end
  end

  def create
    @appointment = Appointment.create(appointment_params)
    appointment.update(status: "requested")
    if @appointment
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    appointment = Appointment.find(params[:id])
    status = appointment.status
    if status == "requested"
      appointment.update(status: "accepted")
      render json: @appointment
    elsif status == "accepted"
      appointment.update(status: "completed")
      render json: @appointment.errors.full_messages, status: :unprocessable_entity
    else
      nil
    end
  end

  def destroy
    @appointment.destroy
  end

  private
  
  def appointment_params
    params.require(:appointment).permit(:worker_id, :customer_id, :time, :services, :total_cost, :tip, :rating, :review, :status)
  end
end
