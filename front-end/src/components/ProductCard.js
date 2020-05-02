import React from "react"


const ProductCard = (props) => {
    return (
        <div className="productCard">
            <img src={props.product.product_img} height="100" width="100" className="productImg" onClick={() => props.hanldleProductCardDetails(props.product)} />
            <h2>{props.product.name}</h2>
            <p>${props.product.price}</p>
            <img src={require("../images/plus_sign.jpeg")} height="30" width="30" className="productAddToCartBtn" onClick={() => props.hanldeProductAddToCartBtn(props.product)} />
        </div>

    )
}

export default ProductCard