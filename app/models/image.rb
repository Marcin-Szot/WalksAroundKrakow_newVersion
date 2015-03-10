class Image < ActiveRecord::Base
  belongs_to :post

  validates :title, presence: true
  validates :photo, presence: true
  validates :category, presence: true

  mount_uploader :photo, PhotoUploader
end
