class PurchasesController < ApplicationController

  def create
    
    order = Order.create(user_id: 1, current: true, completed: false)
    params["cart"].each do |item| 
      purchase = Purchase.new(order_id: order.id, product_id: item["productid"], quantity: item["quantity"])
      purchase.save
    end
    render json: order
  end



end
