import React from "react"
import Sort from "../components/Sort"
import FilterToggles from "../components/FilterToggles"

const FilterContainer = (props) => {



    const createToggles = () => {
        return props.renderCategories.map(category => {
            return <FilterToggles category={category} handleCategoryFilter={props.handleCategoryFilter} key={category} />
        })
    }

    return (
        <div className="filterContainer">
            <h1>Looking for something specific?</h1>
            <Sort handleSort={props.handleSort} />
            <div className="toggleBox">
                <h4>FilterToggles</h4>
                {createToggles()}
            </div>
        </div>
    )
}

export default FilterContainer