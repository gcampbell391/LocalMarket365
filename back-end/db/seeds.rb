require "rest-client"
require 'json'


puts "Creating Store..."
store1 = Store.create(name: "Default Store", street_name: "123 Main  Street", city: "Atlanta", state: "Georgia", zip: 30182, email: "store1@gmail.com", password: "123")
puts "Creating Products..."
##Creates products array from fetch to airTable API
productsUrl = RestClient.get "https://api.airtable.com/v0/app7VzwPsISTrqSwo/Veggie%20Bin?api_key=????????"
products_array = JSON.parse(productsUrl)

products_array["records"].each do |product|
    Product.create(
        name: product["fields"]["name"],
        description: product["fields"]["description"] ,
        product_img: product["fields"]["image_url"][0]["thumbnails"]["large"]["url"], 
        price: product["fields"]["price"].split("$")[1].to_f, 
        category: product["fields"]["category"], 
        category_type: product["fields"]["category_type"], 
        brand: product["fields"]["brand"], 
        store_id: 1,
    )
    byebug
    ##Breaking on 20
  
end


puts "Durty...."