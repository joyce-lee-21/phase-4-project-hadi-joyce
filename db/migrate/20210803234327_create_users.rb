class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username  
      t.string :password_digest
      t.string :profile_type
      t.integer :profile_id
  
      t.timestamps
    end
  end
end
