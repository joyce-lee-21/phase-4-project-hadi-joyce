class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password_digest, :profile_type, :profile_id, :services, :timeslots
  
    belongs_to :profile
  end