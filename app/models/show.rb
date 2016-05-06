class Show < ActiveRecord::Base
  attr_accessible :date, :time, :location
  has_many :bands
end