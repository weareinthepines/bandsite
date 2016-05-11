class Band < ActiveRecord::Base
  attr_accessible :band, :show_id
  belongs_to :show
  def to_s
    display_name
  end
end