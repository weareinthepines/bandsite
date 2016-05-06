class CreateBand < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.string :band
      t.integer :show_id

      t.timestamp
    end
  end
end
