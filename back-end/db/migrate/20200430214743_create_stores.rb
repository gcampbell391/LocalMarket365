class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :street_name
      t.string :city
      t.string :state
      t.integer :zip
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
