class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      render json: @user 
    else
      render json: { errors: @user.error }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user 
    else
      render json: { errors: @user.error }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    render json: { message: 'User Deleted' }
  end

  private 
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :img)
    end
end

