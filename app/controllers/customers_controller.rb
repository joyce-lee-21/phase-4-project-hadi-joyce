class CustomersController < ApplicationController
  def index
      @customers = Customer.all
      render json: @customers
  end
  
  def show
    customer = Customer.find_by(id: params[:id])
    render json: @customer
  end
  
  def create
    @customer = Customer.create(customer_params)
    if @customer
      render json: @customer, status: :created, location: @customer
    else
      render json: @customer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @customer.update(customer_params)
      render json: @customer
    else
      render json: @customer.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  # def destroy
  #   @customer.destroy
  # end

  private

  def customer_params
    params.require(:customer).permit(:name, :image_url, :location, :budget, :description)
  end
    
end
