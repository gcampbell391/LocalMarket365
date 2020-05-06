import React from "react"
import CartCard from "../components/CartCard"

import { Link } from 'react-router-dom';



class Cart extends React.Component {


    renderCartCards = () => {
        console.log(this.props.renderCartItems)
        return this.props.renderCartItems.map(item => {
            return <CartCard handleAddQuantityBtn={this.props.handleAddQuantityBtn} removeItemFromCart={this.props.removeItemFromCart} product={item.product} />

        })
    }

    render() {
        return (
            <div className="cart">
                <h3>Cart</h3>
                {this.renderCartCards()}
                {this.props.renderCartItems && this.props.renderCartItems.length?   <Link to={{ pathname: "/confirmOrder", cart: "cart" }}> <button > Checkout </button> </Link> : null  }
            </div>
        )
    }
}

export default Cart