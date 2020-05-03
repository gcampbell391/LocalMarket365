import React from "react"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = (props) => {
    return (
        <div className="navBar">
            <ul className="iconList" >
                <li><FontAwesomeIcon icon={faHome} style={{ color: 'white' }} size="2x" /></li>
                <li><FontAwesomeIcon icon={faUserCircle} style={{ color: 'white' }} size="2x" /></li>
                <li><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} size="2x" /></li>
            </ul>
            <img className="cartLogo" src={require("../images/cart_icn.png")} height="30" width="30" onClick={props.handleCartClick}></img>

        </div>
    )
}

export default NavBar