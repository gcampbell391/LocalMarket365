class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :product_img
      t.float :price
      t.string :category
      t.string :category_type
      t.string :brand
      t.integer :inventory_quantity 
      t.belongs_to :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
