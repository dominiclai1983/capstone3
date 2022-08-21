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
=begin
products =
  Product.create(
    [
      {
        title: "A Large Bracelet",
        description: "A Large Bracelet",
        sku: "B101",
        price: 19.33,
        quantity: 20,
        product_code_id: 1
      },
      {
        title: "A Medium Bracelet",
        description: "A Medium Bracelet",
        sku: "B102",
        price: 16.55,
        quantity: 40,
        product_code_id: 1
      },
      {
        title: "A Small Bracelet",
        description: "A Small Bracelet",
        sku: "B103",
        price: 13.44,
        quantity: 40,
        product_code_id: 1
      }
    ]
  )
  addresses =
  Address.create(
    [
      {
        first_name: "kiki",
        last_name: "kiki",
        billing_email: "kiki@test.com",
        phone_number: "12345678",
        address_1: "The address 1",
        address_2: "The address 2",
        district: "Aberdeen",
        region: "HK",
        is_billing: false,
        user_id: 3
      }
    ]
  )
=end

users =
  User.create(
    [
      {
        username: "test",
        email: "test@test.com",
        password: "password",
        password_confirmation: "password",
        is_admin: true
      },
      {
        username: "mimi",
        email: "mimi@test.com",
        password: "password",
        password_confirmation: "password",
        is_admin: true
      },
      {
        username: "kiki",
        email: "kiki@test.com",
        password: "password",
        password_confirmation: "password",
        is_admin: true
      }
    ]
  )
