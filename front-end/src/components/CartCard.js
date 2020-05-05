import React, { Component } from "react"




class CartCard extends Component {

    state = {
       amount: 1
    }

    addItem = () => {
            this.props.handleAddQuantityBtn(this.state.amount + 1, this.props.product)
            this.setState({amount: this.state.amount +1})
            
    }

    

    minusItem = () => {

        if(this.state.amount > 1) {
        this.props.handleAddQuantityBtn(this.state.amount - 1, this.props.product)
        this.setState({amount: this.state.amount - 1})
        } else {
        }
}

    render() {
    return (
        <div >
            <img src={this.props.product.product_img} height="50" className="productImg" />
            <h4>{this.props.product.name}</h4>
            <h6>{this.props.product.price}</h6>
            <h4>Amount</h4>

            <button onClick = {this.minusItem}> - </button>
            <input  maxLength="2" size="1" name={this.props.product.id} type="text" value={this.state.amount}/> 
            <button  onClick = {this.addItem} > + </button>
            <br/>
            <button onClick = {() => this.props.removeItemFromCart(this.props.product)} > Remove </button>
        </div>
    )
}
}

export default CartCard