import React from "react"
import CartCard from "../components/CartCard"

import { NavLink } from 'react-router-dom';



class Cart extends React.Component {


renderCartCards = () => {
    console.log(this.props.renderCartItems)
  return  this.props.renderCartItems.map(item => {
    return <CartCard handleAddQuantityBtn = {this.props.handleAddQuantityBtn} removeItemFromCart = {this.props.removeItemFromCart} product = {item.product}  />
     
})
}

    render() {
        return (
            <div className="cart">
                <h1>Cart</h1>
                {this.renderCartCards()}
                <NavLink to="/confirmOrder" exact> <button > Checkout </button> </NavLink>
            </div>
        )
    }
}

export default Cart