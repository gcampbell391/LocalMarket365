import React from "react"
import { NavLink } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBar = (props) => {
    return (
        <div className="navBar">
            <ul className="iconList" >
                <NavLink to="/" exact><FontAwesomeIcon icon={faHome} style={{ color: 'white' }} size="2x" /> </NavLink>
                <NavLink to="/log_in" exact><FontAwesomeIcon icon={faUserCircle} style={{ color: 'white' }} size="2x" /></NavLink>
                <NavLink to="/current_cart" exact><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} size="2x" /></NavLink>
            </ul>
        </div >
    )
}

export default NavBar
