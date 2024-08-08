class PodSerializer < ActiveModel::Serializer
  has_many :users
  attributes :id, :name, :points
end
