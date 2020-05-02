import React from "react"


const ProductDetails = (props) => {
    console.log(props.product)
    return (
        <div className="productDetails">
            <div className="productDetailsCard">
                <img src={props.product.product_img} height="100" width="100" className="productImg" />
                <h2>{props.product.name}</h2>
                <p>${props.product.price}</p>
                <p>Brand: {props.product.brand}</p>
                <p>Category: {props.product.category}</p>
                <p>Category Type: {props.product.category}</p>
                <p>Description: {props.product.description}</p>
                <button className="backToProductsBtn" onClick={props.handleBackToProductsClick}>Back to Products</button>
            </div>
        </div>

    )
}

export default ProductDetails