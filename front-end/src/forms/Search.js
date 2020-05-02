import React from "react"

//Search Component includes onChange event for the forms input to filter products 
const Search = (props) => {
    return (
        <form id="searchForm">
            <label id="searchLabel" >Search</label><br></br>
            <input placeholder="Enter Search Here..." onChange={(event) => props.handleSearchTermChange(event)} name="searchTerm" />
        </form>
    )
}

export default Search