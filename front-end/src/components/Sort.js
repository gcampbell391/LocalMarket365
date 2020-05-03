import React from "react"


const Sort = (props) => {
    return (
        <div className="sort">
            <h1>Sort</h1>
            <select>
            <option value="0">Sort By</option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
            <option value="3">Most Purchased</option>

            </select>
        </div>
        

    )
}

export default Sort