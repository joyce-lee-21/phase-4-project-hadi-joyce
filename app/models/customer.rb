class Customer < ApplicationRecord
    has_many :appointments
    has_many :workers, through: :appointments
    has_one :user, as: :profile 

    def workers_matched
        workers = Worker.all
        workers.select{|worker| 
            worker.location == self.location
            return worker, worker.services
        }
    end
end
