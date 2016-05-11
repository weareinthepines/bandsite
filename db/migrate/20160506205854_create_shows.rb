class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.date :date
      t.time :time
      t.string :location
      t.string :venue

      t.timestamp
    end
  end
end
