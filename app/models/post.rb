class Post < ActiveRecord::Base
  has_many :images, dependent: :destroy

  validates :title, presence: true
  validates :text, presence: true
end
