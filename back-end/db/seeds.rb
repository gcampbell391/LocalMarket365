require "rest-client"
require 'json'


Store.destroy_all
Product.destroy_all

puts "happy"
puts "Creating Store..."
store1 = Store.create(name: "Default Store", street_name: "123 Main  Street", city: "Atlanta", state: "Georgia", zip: 30182, email: "store1@gmail.com", password: "123")

puts "Creating Products..."
##Creates products array from fetch to airTable API
productsUrl = RestClient.get "https://api.airtable.com/v0/app7VzwPsISTrqSwo/Veggie%20Bin?api_key=?"
products_array = JSON.parse(productsUrl)
count = 0
products_array["records"].each do |product|
    
    Product.create(
        name: product["fields"]["name"],
        description: product["fields"]["description"],
        product_img: product["fields"]["image_url"][0]["url"], 
        price: product["fields"]["price"], 
        category: product["fields"]["category"], 
        category_type: product["fields"]["category_type"], 
        brand: product["fields"]["brand"],
        inventory_quantity: product["fields"]["quantity"],
        store_id: store1.id
    )
end
puts "loaded Products"

user1 = User.create(first_name: "Jim", last_name: "Smith", img: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70", street_name: "120 Cannon Street", city: "Charleston", state: "South Carolina", zip_code: 29403, email: "user@gmail.com", password: "123")
user2 = User.create(first_name: "Xander", last_name: "Jenkins", img: "https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg", street_name: "70 Morris Street", city: "Charleston", state: "South Carolina", zip_code: 29403, email: "user2@gmail.com", password: "123")

puts "loaded users"


order1 = Order.create(user_id: user1.id, current: false, completed: true)

Purchase.create(order_id: order1.id, product_id: Product.all[0].id, quantity: 4)
Purchase.create(order_id: order1.id, product_id: Product.all[3].id, quantity: 10)

puts "loaded Purchase"

puts "Durty...."