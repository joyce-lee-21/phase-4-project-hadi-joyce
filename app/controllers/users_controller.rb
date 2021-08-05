class UsersController < ApplicationController
    def index 
      @users = User.all 
      render json: @users
    end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        # &.authenticate(params[:password])
        # session[:user_id] = user.id
        render json: user
        # {id: user.id, username: user.username}
      else
          render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end
    
      # signup 
      def create
        # byebug
        if params[:profile_type] == "Customer"
          model = Customer.create(customer_params)
        else
          model = Worker.create(worker_params)
        end

        user = User.create(
          username: params[:username], 
          password_digest: params[:password], 
          profile_type: params[:profile_type], 
          profile_id: model.id
        )
        
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
      end

      # account updates
      def update
        user = User.find_by(id: session[:user_id])
        if user
          user.update(user_params)
            if params[:profile_type] == "Customer"
              profile = Customer.find_by(id: params[:profile_id])
              profile.update(customer_params)
            elsif params[:profile_type] == "Worker"
              profile = Worker.find_by(id: params[:profile_id])
              profile.update(worker_params)
            else
              render json: {error: "Profile Not found"}, status: :not_found
            end
          render json: user, status: :ok
        else
          render json: {error: "Profile Not found"}, status: :not_found
        end
        # Option A
        # if params[:profile_type] == "Customer"
        #   user.update(
        #     username: params[:username],
        #     password: params[:password],
        #     profile[:name]: params[:name], 
        #     profile[:image_url]: params[:image_url], 
        #     profile[:location]: params[:location], 
        #     profile[:budget]: params[:budget], 
        #     profile[:description]: params[:description]
        #   )

        # if params[:profile_type] == "Customer"
        #   customer = Customer.update(customer_params)
        #   user = User.update(user_params)
        #   render json: user, status: :created
        # elsif params[:profile_type] == "Worker"
        #   worker = Worker.update(worker_params)
        #   user = User.update(user_params)
        #   render json: user, status: :created
        # else
        #   render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        # end
      end

      private

    # def set_user
    #     @user = User.find(params[:id])
    #   end
      
    def user_params
      params.permit(:username, :password, :profile_type, :profile_id)
    end

    # def create_user_params
    #   params.permit(:username, :password_digest, :profile_type, :profile_id)
    # end

    # def update_user_params
    #   params.permit(:username, :password_digest)
    # end

    def customer_params
      params.permit(:name, :image_url, :location, :budget, :description)
    end

    # def create_customer_params
    #   params.permit(:name, :image_url, :location, :budget, :description)
    # end

    def worker_params
      params.permit(:name, :image_url, :location, :average_rating, :earnings, :description)
    end

    # def create_worker_params
    #   params.permit(:name, :image_url, :location, :average_rating, :earnings, :description)
    # end
end
