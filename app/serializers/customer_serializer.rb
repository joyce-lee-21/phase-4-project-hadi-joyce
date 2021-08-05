class CustomerSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :location, :budget, :description, :workers_matched, :created_at, :updated_at
  end
  