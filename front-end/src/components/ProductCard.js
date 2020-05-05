import React from "react"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProductCard = (props) => {
    return (
        <div className="productCard">

            <img src={props.product.product_img} height="100" className="productImg" alt={props.product.name} onClick={() => props.hanldleProductCardDetails(props.product)} />

            <h2>{props.product.name}</h2>
            <p>${props.product.price}</p>
            <p className="addToCartProductBtn"><FontAwesomeIcon icon={faPlus} style={{ color: 'blue' }} size="2x" onClick={() => props.hanldeProductAddToCartBtn(props.product)} /></p>

        </div>

    )
}

export default ProductCard