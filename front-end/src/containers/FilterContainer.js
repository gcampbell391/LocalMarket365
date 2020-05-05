import React from "react"
import Sort from "../components/Sort"
import FilterToggles from "../components/FilterToggles"

const FilterContainer = (props) => {



const createToggles = () => {

    return props.renderCategories.map(category => {
    return <FilterToggles category = { category } handleCategoryFilter = { props.handleCategoryFilter} /> 
    })
}

    return (
        <div className="filterContainer">
            <h1>Filter Container</h1>
            <Sort handleSort = {props.handleSort} />
            <h2>FilterToggles</h2>
           {createToggles()}

        </div>
    )
}

export default FilterContainer