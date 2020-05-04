import React from 'react';
import './App.css';
import Home from "./containers/Home"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LogInForm from "./forms/LogIn"
import Cart from "./containers/Cart"
import UserAccountHome from './components/UserAccountHome';

class App extends React.Component {
  state = {
    user: null,
    showSignUpForm: false

  }



  handleLogInBtn = (event) => {
    event.preventDefault()
    const userEmail = event.target.parentElement.querySelector("#loginEmailInput").value
    const userPassword = event.target.parentElement.querySelector("#loginPasswordInput").value
    const userData = {
      email: userEmail,
      password: userPassword
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          user: data.user,
          showSignUpForm: false
        })
      })
    event.target.parentElement.reset()
  }



  handleSignUpFormSubmit = (event) => {
    event.preventDefault()
    let userEmail = event.target.parentElement.querySelector("#emailInput").value
    let userPassword = event.target.parentElement.querySelector("#passwordInput").value
    let userImg = event.target.parentElement.querySelector("#imgInput").value
    let userFName = event.target.parentElement.querySelector("#fNameInput").value
    let userLName = event.target.parentElement.querySelector("#lNameInput").value
    let newStreet = event.target.parentElement.querySelector("#stateInput").value
    let newCity = event.target.parentElement.querySelector("#cityInput").value
    let newState = event.target.parentElement.querySelector("#stateInput").value
    let newZip = event.target.parentElement.querySelector("#zipInput").value
    const newUser = {
      email: userEmail,
      password: userPassword,
      first_name: userFName,
      last_name: userLName,
      street_name: newStreet,
      city: newCity,
      state: newState,
      zip_code: newZip,
      img: userImg
    }
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ user: data.user })
      })
  }

  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" render={() => <Home user={this.state.user} />} />
          <Route exact path="/log_in" render={() => this.state.user ? <UserAccountHome user={this.state.user} /> : <LogInForm user={this.state.user} handleLogInBtn={this.handleLogInBtn} handleSignUpFormSubmit={this.handleSignUpFormSubmit} showSignUpForm={this.state.showSignUpForm} />} />
          <Route exact path="/current_cart" render={() => <Cart />} />
        </div>
      </Router>
    )
  }
}

export default App;
