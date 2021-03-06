class AddInitialColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :nickname, :string, null: false, unique: true
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :first_name_kana, :string, null: false
    add_column :users, :last_name_kana, :string, null: false
    add_column :users, :birthday, :date, null: false
    add_column :users, :self_introduction, :text
    add_column :users, :provider, :string
    add_column :users, :uid, :string
  end
end
