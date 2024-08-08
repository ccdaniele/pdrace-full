class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :points
  # has_and_belongs_to_many :users

end
