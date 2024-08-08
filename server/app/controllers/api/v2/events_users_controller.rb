class Api::V2::EventsUsersController < ApplicationController
  before_action :set_users_event, only: %i[ show update destroy ]

  # GET /users_events
  def index
    @users_events = EventsUser.all

    render json: @users_events
  end

  # GET /users_events/1
  def show
    render json: @users_event
  end

  # POST /users_events
  def create
    @users_event = EventsUser.new(users_event_params)

    if @users_event.save
      render json: @users_event, status: :created, location: @users_event
    else
      render json: @users_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users_events/1
  def update
    if @users_event.update(users_event_params)
      render json: @users_event
    else
      render json: @users_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users_events/1
  def destroy
    @users_event.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_event
      @users_event = EventsUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def users_event_params
      params.require(:users_event).permit(:user_id, :event_id)
    end
end
