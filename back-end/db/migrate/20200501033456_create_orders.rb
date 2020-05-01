class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user
      t.boolean :current
      t.boolean :completed

      t.timestamps
    end
  end
end
