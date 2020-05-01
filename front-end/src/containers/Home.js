import React, { Component } from "react"
import Header from "./Header"
import Body from "./Body"

export default class Home extends Component {
    state = {
        allProducts: [],
        cartClicked: false,
        currentProductIndex: 0
    }

    //Fetches all products and sets them to allProducts state variable 
    componentDidMount() {
        fetch("http://localhost:3000/products")
            .then(resp => resp.json())
            .then(data => {
                this.setState({ allProducts: data })
            })
    }

    //Handles Cart click on cart logo to display/hide cart component/div
    handleCartClick = () => {
        this.setState({ cartClicked: !this.state.cartClicked })
    }

    //Handles slice allproducts into specific return set...we can change this and make it dynamic 
    sliceProducts = () => {
        return this.state.allProducts.slice(this.state.currentProductIndex, (this.state.currentProductIndex + 12))
    }

    handlePageClick = (event) => {
        console.log(this.state.currentProductIndex)
        this.state.currentProductIndex >= 0 ? this.renderMoreProducts(event) : alert("You're at the begining")
    }

    renderMoreProducts = (event) => {
        event.target.innerText === "Next" ? this.setState({ currentProductIndex: this.state.currentProductIndex + 12 }) : this.setState({ currentProductIndex: this.state.currentProductIndex - 12 })
    }
    render() {
        return (
            <div>
                <Header handleCartClick={this.handleCartClick} />
                <Body
                    allProducts={this.sliceProducts()}
                    cartClicked={this.state.cartClicked}
                    handlePageClick={this.handlePageClick}
                />
            </div>
        )
    }
}