import React from "react"
import Sort from "../components/Sort"
import FilterToggles from "../components/FilterToggles"

const FilterContainer = (props) => {
    return (
        <div className="filterContainer">
            <h1>Filter Container</h1>
            <Sort />
            <FilterToggles handleCategoryFilter = { props.handleCategoryFilter} />

        </div>
    )
}

export default FilterContainer