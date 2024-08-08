class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy ]
  # GET /users
    def index
      users = User.all

      render json: users
    end

  # GET /users/1
  def show
      render json: @user, status: :accepted
  end

  # POST /users
  def create
    @user = User.create(user_params)

      if @user.valid?
        render json: { user: UserSerializer.new(@user)}, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
  end

# GET /users/random

  def setRandomUser
    randomId = User.randomUser
    @user = User.find(randomId)
    render json: @user, status: :accepted
  end


  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :last_name, :pod_id)
    end
end
