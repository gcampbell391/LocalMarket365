import React, { Component } from "react"
import Search from "../forms/Search"
import NavBar from "../components/NavBar"


export default class Header extends Component {
    state = {

    }



    render() {
        return (
            <div className="headerContainer">
                <img className="appLogo" alt="Company Logo" />
                <NavBar handleCartClick={this.props.handleCartClick} />
                <Search handleSearchTermChange={this.props.handleSearchTermChange} />

            </div>
        )
    }
}