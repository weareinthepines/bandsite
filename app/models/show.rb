class Show < ActiveRecord::Base
  attr_accessible :date, :time, :location, :venue
  has_many :bands
end