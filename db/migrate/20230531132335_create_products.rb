class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.text :brand, null: false 
      t.string :name, null: false 
      t.text :description, null: false 
      t.text :dimensions
      t.string :category, null: false 
      t.float :price, null: false
      t.timestamps
    end
  end
end
