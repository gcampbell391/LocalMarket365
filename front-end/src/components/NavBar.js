import React from "react"

const NavBar = (props) => {
    return (
        <div className="navBar">

            <img className="cartLogo" src={require("../images/cart_icn.png")} height="30" width="30" onClick={props.handleCartClick}></img>

        </div>
    )
}

export default NavBar