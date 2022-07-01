class ProductCode < ApplicationRecord
  has_many :products

  validates :category_code, presence: true, length: { minimum: 3, maximum: 50 }
  validates :category_desc, presence: true, length: { minimum: 3, maximum: 50 }
end
