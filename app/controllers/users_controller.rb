class UsersController < ApplicationController
    def index 
      @users = User.all 
      render json: @users
    end

    def show
      user = User.find_by(id: params[:id])
      render json: @user
    end
    
      # signup 
      def create
        if params[:profile_type] == "Customer"
          customer = Customer.create(customer_params)
          @user = User.create(:username, :password_digest, :profile_type, :profile_id)
          render json: @user, status: :created, location: @user
        elsif params[:profile_type] == "Worker"
          worker = Worker.create(worker_params)
          @user = User.create(user_params)
          render json: @user, status: :created, location: @user
        else
          render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
      end

      private

    # def set_user
    #     @user = User.find(params[:id])
    #   end
      
    def user_params
      params.require(:user).permit(:username, :password_digest, :profile_type, :profile_id)
    end

    def customer_params
      params.require(:customer).permit(:name, :image_url, :location, :budget, :description)
    end

    def worker_params
      params.require(:worker).permit(:name, :image_url, :location, :average_rating, :earnings, :description)
    end
end
