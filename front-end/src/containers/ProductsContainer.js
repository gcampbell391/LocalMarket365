import React from "react"
import ProductCard from "../components/ProductCard"
import Cart from "./Cart"


const ProductsContainer = (props) => {
    let allProducts = props.allProducts
    return (
        <div className="productContainer">
            <div className="productContainerBox">
                {allProducts.map(product => {
                    return <ProductCard product={product} key={product.id} hanldeProductAddToCartBtn={props.hanldeProductAddToCartBtn} hanldleProductCardDetails={props.hanldleProductCardDetails} />
                })}

                {props.cartClicked && <Cart />}
            </div>
            <button className="backNextBtns" onClick={(event) => props.handlePageClick(event)}>Back</button><button className="backNextBtns" onClick={(event) => props.handlePageClick(event)}>Next</button>
        </div>
    )
}

export default ProductsContainer