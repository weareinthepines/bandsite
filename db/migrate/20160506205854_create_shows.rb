class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.date :date
      t.time :time
      t.string :location

      t.timestamp
    end
  end
end
