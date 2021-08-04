class WorkerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :location, :average_rating, :earnings, :description

  has_many :services
  has_many :timeslots
end
