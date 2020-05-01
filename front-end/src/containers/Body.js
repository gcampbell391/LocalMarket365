import React, { Component } from "react"
import ProductsContainer from "./ProductsContainer"
import FilterContainer from "./FilterContainer"



export default class Body extends Component {
    state = {

    }

    render() {
        return (
            <div className="app_body">
                <h1>Body</h1>
                <FilterContainer />
                <ProductsContainer
                    allProducts={this.props.allProducts}
                    cartClicked={this.props.cartClicked}
                    handlePageClick={this.props.handlePageClick}
                />
            </div>
        )
    }

}