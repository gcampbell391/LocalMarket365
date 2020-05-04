import React from "react"


const Sort = (props) => {
    return (
        <div className="sort">
            <select onChange={(event) => props.handleSort(event)}>
                <option value="all">Sort By</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>

            </select>
        </div>


    )
}

export default Sort