class Band < ActiveRecord::Base
  attr_accessible :band, :show_id
  belongs_to :show
end