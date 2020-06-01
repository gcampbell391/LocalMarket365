import React, { Component } from "react"
import ProductsContainer from "./ProductsContainer"
import FilterContainer from "./FilterContainer"
import ProductDetails from "../components/ProductDetails"
import Cart from "./Cart"



export default class Body extends Component {
    state = {
        productDetailObject: null
    }

    //Handles when a Product Card image is clicked to render the details...This changes the productDetailObject to the clicked object 
    hanldleProductCardDetails = (product) => {
        this.setState({ productDetailObject: product })
    }

    //Handles when the back to products btn is clicked to render the all products...This changes the productDetailObject to null  
    handleBackToProductsClick = () => {
        this.setState({ productDetailObject: null })
    }

    //this includes a ternary operator to render all products or a single product detail card
    render() {
        return (
            <div className="app_body">

                {/* {this.props.currentUser ? <h1>Welcome, {this.props.currentUser.first_name}</h1> : <h1>Welcome</h1>} */}

                {<FilterContainer handleSort={this.props.handleSort} renderCategories={this.props.renderCategories} handleCategoryFilter={this.props.handleCategoryFilter} />}



                <div className="cart-div">
                    {this.props.viewCart ? <Cart
                        removeItemFromCart={this.props.removeItemFromCart}
                        renderCartItems={this.props.renderCartItems}
                        handleAddQuantityBtn={this.props.handleAddQuantityBtn}
                        // handleCheckoutBtn = { this.props.handleCheckoutBtn}
                        handleConfirmOrder={this.props.handleConfirmOrder}
                    /> : ""}
                </div>

                {
                    this.state.productDetailObject === null ?
                        <div>
                            <ProductsContainer
                                allProducts={this.props.allProducts}
                                cartClicked={this.props.cartClicked}
                                handlePageClick={this.props.handlePageClick}
                                hanldeProductAddToCartBtn={this.props.hanldeProductAddToCartBtn}
                                hanldleProductCardDetails={this.hanldleProductCardDetails}
                            />

                        </div>
                        :
                        <div>
                            <ProductDetails
                                product={this.state.productDetailObject}
                                handleBackToProductsClick={this.handleBackToProductsClick}
                            />
                        </div>
                }
            </div>
        )
    }


}