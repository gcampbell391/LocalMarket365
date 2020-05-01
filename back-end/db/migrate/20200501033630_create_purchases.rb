class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.belongs_to :product
      t.belongs_to :order
      t.integer :quantity

      t.timestamps
    end
  end
end
