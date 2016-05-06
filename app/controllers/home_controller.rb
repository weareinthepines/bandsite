class HomeController < ApplicationController
  def index
  end

  def shows
    @shows = Show.all()
  end
end
