## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
has_many :chats
has_many :groups, through: :users_groups
has_many :users_groups

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
has_many :users, through: :users_groups
has_many :chats
has_many :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group