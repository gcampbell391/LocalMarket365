import React, { Component } from "react"
import Header from "./Header"
import Body from "./Body"


export default class Home extends Component {
    state = {
        allProducts: [],
        cartClicked: false,
        currentProductIndex: 0,
        searchTerm: ""
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

    //Handles slice allproducts into specific return set and includes filter functionality for searchTerm
    sliceProducts = () => {
        let updatedProducts = this.state.allProducts.filter(product => { return product.name.toLowerCase().includes(this.state.searchTerm) })
        return updatedProducts.slice(this.state.currentProductIndex, (this.state.currentProductIndex + 12))
    }

    //Handles page click to render previous/next.....Needs Fix for if they go past 0
    handlePageClick = (event) => {
        console.log(this.state.currentProductIndex)

        this.state.currentProductIndex < 0 ? alert("You're at the begining") : this.renderMoreProducts(event)
    }

    //Helper Method to render more products for HandlePageClick
    renderMoreProducts = (event) => {
        event.target.innerText === "Next" ? this.setState({ currentProductIndex: this.state.currentProductIndex + 12 }) : this.setState({ currentProductIndex: this.state.currentProductIndex - 12 })
    }

    //As of now just console logs clicked product to console...
    hanldeProductAddToCartBtn = (product) => {
        console.log("Product Clicked to add to cart:", product)
    }

    //Handle Input Change to set state variable accordingly 
    handleSearchTermChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div>
                <Header
                    handleCartClick={this.handleCartClick}
                    handleSearchTermChange={this.handleSearchTermChange}
                />
                <Body
                    allProducts={this.sliceProducts()}
                    cartClicked={this.state.cartClicked}
                    handlePageClick={this.handlePageClick}
                    hanldeProductAddToCartBtn={this.hanldeProductAddToCartBtn}
                />
            </div>
        )
    }
}