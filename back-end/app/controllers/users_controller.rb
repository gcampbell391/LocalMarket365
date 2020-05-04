class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end


    def create
        @user = User.new(user_params)
        @user.password_digest = BCrypt::Password.create(params["password"])
        if @user.valid?
            @user.save
            session[:user_id] = @user.id
            render json: {
                status: :created,
                logged_in: true,
                user: @user
            }
        else
            render json: { status: 401 }
        end
    end
    


    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :img, :street_name, :city, :state, :zip_code)
    end
end
