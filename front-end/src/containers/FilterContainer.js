import React from "react"
import Sort from "../components/Sort"
import FilterToggles from "../components/FilterToggles"

const FilterContainer = (props) => {



const createToggles = () => {
   console.log("happy")
    return props.renderCategories.map(category => {
        console.log(category)
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