# LocalMarket365
Welcome to LocalMarket365. An e-commerce platform for small or local grocery stores. 

# API Setup
From the back-end directory, run the following commands to set up and start the server:

$ bundle install            # Install gems
$ rails db:migrate db:seed  # Migrate and seed
$ rails s                   # Start the server
A full list of available routes can be found by visiting http://localhost:3000/rails/info/routes.

# Start Up Front End
From the front-end directory, run the following command to open up the app in the browser:

$ start npm                
After App is open in browser a user can browse all products. A user can filter their searches on the left by choosing a category. There is also a dropdown to sort by price and name. You can click on a product's card to render the product details. There is a search bar to narrow rendered products by name. An item or product can be added to the current cart by selecting the addition sign on the product card. You can browse through all products with the buttons at the bottom of the product container. 

# Home
A user can log in here or create an account. An acount is requried to submit a cart for order. Once loggin in, a user can edit profile information or submit a cart. 

# Cart
Selecting the cart icon will display the current cart. While displayed a user can adjust the quantity for each item in cart, remove items, or submit cart. If a user selects checkout, the user will be redirected to the confirm order page. 

# Confirm Order
The total price of the cart will be displayed to the user with the input for a pick up time. A map will also be rendered displaying the users's address and the store's location. Once time is selected, confirm the order. An alert will display notifying the user when to pick up their order. 


Thanks and a little more about the App
Front-end: Javascript, React, HTML, CSS 
Back-end: Ruby on Rails App was created from scratch in 5 days

Thanks for playing checking out the app! Hope you enjoyed it!

---GC3 & Spencer Blum