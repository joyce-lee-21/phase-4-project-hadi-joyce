class User < ApplicationRecord
    belongs_to :profile, polymorphic: true

    has_secure_password

    validates :username, presence: true, uniqueness: true

    def services
        self.profile_type == "Worker" ? self.profile.services : nil
    end

    def timeslots
        self.profile_type == "Worker" ? self.profile.timeslots : nil
    end
end
