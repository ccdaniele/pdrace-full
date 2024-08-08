class Pod < ApplicationRecord
  has_many :users


  def score
    pod_score = self.users.map.sum { |user|user.points  }
    score = pod_score
    score
  end


end
