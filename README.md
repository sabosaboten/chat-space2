## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
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
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|null: false|
### Association
has_many :users, through: :users_groups
has_many :chats
has_many :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to :user
belongs_to :group