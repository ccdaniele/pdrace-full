class Api::V2::PodsController < ApplicationController
  before_action :set_pod, only: %i[ show update destroy ]

  # GET /pods
  def index
    @pods = Pod.all

    render json: @pods
  end

  # GET /pods/1
  def show
    render json: @pod
  end

  # GET /indexwithpoints
  def indexwithpoints
    pods_points = Pod.all.map{ |pods|user.points  }
    render json: @pods
  end

  # POST /pods
  def create
    @pod = Pod.new(pod_params)

    if @pod.save
      render json: @pod, status: :created, location: @pod
    else
      render json: @pod.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pods/1
  def update
    if @pod.update(pod_params)
      render json: @pod
    else
      render json: @pod.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pods/1
  def destroy
    @pod.destroy!
  end

  def setPodScore
    @user = User.find(randomId)

  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pod
      @pod = Pod.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pod_params
      params.require(:pod).permit(:name, :pod_id, :points)
    end
end
