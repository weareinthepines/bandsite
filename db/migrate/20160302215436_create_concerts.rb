class CreateConcerts < ActiveRecord::Migration
  def change
    create_table :concerts do |t|
        t.string :date
        t.string :address
        t.string :detail

      t.timestamps
    end
  end
end
