# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
=begin
users =
  User.create(
    [
      { username: "Tommy", email: "tommy@test.com", password: "password" },
      { username: "Bobby", email: "bobby@test.com", password: "password" },
      { username: "Sarah", email: "sarah@test.com", password: "password" },
      { username: "Lilly", email: "lilly@test.com", password: "password" },
      { username: "Jimmy", email: "jimmy@test.com", password: "password" },
      { username: "Cammy", email: "cammy@test.com", password: "password" }
    ]
  )
users =
  User.create(
    [
      {
        username: "Tommy",
        email: "tommy@test.com",
        password: "password",
        is_admin: true
      }
    ]
  )

product_codes =
  ProductCode.create(
    [{ code: "A101", desc: "Bracelet" }, { code: "A102", desc: "Earrings" }]
  )


=end

products =
  Product.create(
    [
      {
        title: "A Large Bracelet",
        description: "A Large Bracelet",
        sku: "B101",
        price: 12.33,
        quantity: 5,
        product_code_id: 1
      },
      {
        title: "A Medium Bracelet",
        description: "A Medium Bracelet",
        sku: "B102",
        price: 12.55,
        quantity: 5,
        product_code_id: 1
      },
      {
        title: "A Small Bracelet",
        description: "A Small Bracelet",
        sku: "B103",
        price: 12.44,
        quantity: 5,
        product_code_id: 1
      }
    ]
  )
