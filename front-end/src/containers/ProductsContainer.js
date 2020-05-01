import React from "react"
import ProductCard from "../components/ProductCard"
import Cart from "./Cart"


const ProductsContainer = (props) => {
    let allProducts = props.allProducts
    return (
        <div className="productContainer">
            <div className="productContainerBox">
                {allProducts.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}

                {props.cartClicked && <Cart />}
            </div>
            <button onClick={(event) => props.handlePageClick(event)}>Back</button><button onClick={(event) => props.handlePageClick(event)}>Next</button>
        </div>
    )
}

export default ProductsContainer