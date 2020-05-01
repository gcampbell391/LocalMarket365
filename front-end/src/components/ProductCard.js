import React from "react"


const ProductCard = (props) => {
    return (
        <div className="productCard">
            <img src={props.product.product_img} height="100" width="100" className="productImg" />
            <h2>{props.product.name}</h2>
            <p>${props.product.price}</p>
        </div>

    )
}

export default ProductCard