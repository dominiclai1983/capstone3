class ProductCode < ApplicationRecord
  has_many :products

  validates :code, presence: true, length: { minimum: 3, maximum: 50 }
  validates :desc, presence: true, length: { minimum: 3, maximum: 50 }
end
