import React, { Component } from 'react'
import Map from "../components/map"
import Header from "../containers/Header"


export default class ConfirmOrder extends Component {
    state = {
        total_price: 0
    }

    componentDidMount() {
        let cartItems = this.props.cart
        let new_Total = 0
        cartItems.forEach(item => {
            new_Total = new_Total + (item.product.price * item.quantity)
        })
        let rounded_Total = new_Total.toFixed(2);
        this.setState({ total_price: rounded_Total })
    }
    render() {
        console.log("Confirm Order:", this.props.cart)

        return (
            <div>
                <Header />
                <div className="confirmOrderContainer">
                    <h2>Total Price</h2>
                    <p>$ {this.state.total_price}</p>
                    <h3> Schedule a time for pickup</h3>
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>
                    <h3> Location </h3>
                    <Map />
                    <button onClick={() => this.props.handleCheckoutBtn(document.querySelector("#appt").value)}>Confirm Order</button>
                </div>
            </div>

        )
    }

}