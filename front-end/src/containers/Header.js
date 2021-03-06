import React, { Component } from "react"
import Search from "../forms/Search"
import NavBar from "../components/NavBar"


export default class Header extends Component {
    state = {

    }



    render() {
        return (
            <div className="headerContainer">
                <img className="appLogo" src={require("../images/market365Logo.png")}  alt="Company Logo" />
                <NavBar handleViewCart = {this.props.handleViewCart} handleCartClick={this.props.handleCartClick} />
                <Search handleSearchTermChange={this.props.handleSearchTermChange} />

            </div>
        )
    }
}