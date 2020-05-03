import React, { Component } from "react"



class FilterToggles extends Component {

state = {
  Pantry: false,
  Produce: false
}

onChange = (event) => {
  console.log(event)
  this.setState({[event.target.value]: !this.state[event.target.value]})
  this.props.handleCategoryFilter(event)
}



render(){
    return (
        <div className="FilterToggles">
          <h2>FilterToggles</h2>
          
          <label>
              <input type="checkbox" value="Pantry" checked= {this.state.Pantry} onChange = {(event) => this.onChange(event)}  />
              Pantry
            </label>
            <br/>
            <label>
              <input type="checkbox" value="Produce" checked= {this.state.Produce} onChange = {(event) => this.onChange(event)}  />
              Produce
            </label>
            
        </div>

    )
}
}

export default FilterToggles