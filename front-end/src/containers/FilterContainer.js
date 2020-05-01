import React from "react"
import Sort from "../components/Sort"
import FilterToggles from "../components/FilterToggles"

const FilterContainer = () => {
    return (
        <div className="filterContainer">
            <h1>Filter Container</h1>
            <Sort />
            <FilterToggles />

        </div>
    )
}

export default FilterContainer