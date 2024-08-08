class UserSerializer < ActiveModel::Serializer
  belongs_to :pod
  attributes :id, :name, :points, :pod_id

end
