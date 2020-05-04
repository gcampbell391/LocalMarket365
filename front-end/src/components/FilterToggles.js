import React, { Component } from "react"



class FilterToggles extends Component {

state = {
}

onChange = (event) => {
  console.log(event)
  this.setState({[event.target.value]: !this.state[event.target.value]})
  this.props.handleCategoryFilter(event)
}

componentDidMount(){
  this.setState({[this.props.category]: false})
}



render(){
    return (
        <div className="FilterToggles">
          
          
          <label>
              <input type="checkbox" value= {this.props.category} checked= {this.state[this.props.category]} onChange = {(event) => this.onChange(event)}  />
              {this.props.category}
            </label>
            <br/>
            {/* <label>
              <input type="checkbox" value="Produce" checked= {this.state.Produce} onChange = {(event) => this.onChange(event)}  />
              Produce
            </label> */}
            
        </div>

    )
}
}

export default FilterToggles