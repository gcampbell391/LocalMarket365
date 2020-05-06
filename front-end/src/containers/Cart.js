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
                <h1>Cart</h1>
                {this.renderCartCards()}
                <Link to={{ pathname: "/confirmOrder", cart: "cart" }}> <button > Checkout </button> </Link>
            </div>
        )
    }
}

export default Cart