class AddNewController < ApplicationController
  def new
    @concerts = Concert.all
    @concert = Concert.new
  end



end

