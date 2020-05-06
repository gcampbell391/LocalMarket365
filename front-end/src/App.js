import React from 'react';
import './App.css';
import Home from "./containers/Home"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LogInForm from "./forms/LogIn"
import Cart from "./containers/Cart"
import UserAccountHome from './components/UserAccountHome';
import ConfirmOrder from './containers/ConfirmOrder';

class App extends React.Component {
  state = {
    user: null,
    showSignUpForm: false,
    showEditInfo: false
  }


  //Handles Log authenication 
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


  //Handles Sign Up form to create new user and log user in..persists in the backend 
  handleSignUpFormSubmit = (event) => {
    event.preventDefault()
    const newUser = this.createUserObjectFromForm(event)
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
        this.setState({ showEditInfo: false })
      })
  }

  //Handles Edit button click on UserAccountHome Edit Form
  handleEditFormSubmit = (event) => {
    event.preventDefault()
    const updatedUser = this.createUserObjectFromForm(event)
    console.log(updatedUser)
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ user: data.user })

      })
    event.target.parentElement.reset()
  }

  //Helper method to create user object from forms
  createUserObjectFromForm = (event) => {
    let userEmail = event.target.parentElement.querySelector("#emailInput").value
    let userPassword = event.target.parentElement.querySelector("#passwordInput").value
    let userImg = event.target.parentElement.querySelector("#imgInput").value
    let userFName = event.target.parentElement.querySelector("#fNameInput").value
    let userLName = event.target.parentElement.querySelector("#lNameInput").value
    let newStreet = event.target.parentElement.querySelector("#streetInput").value
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
    return newUser
  }

  handleLogOut = () => {
    this.setState({ user: null })
  }

  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" render={() => <Home user={this.state.user} />} />
          <Route exact path="/log_in" render={() => this.state.user ? <UserAccountHome user={this.state.user} handleEditFormSubmit={this.handleEditFormSubmit} showEditInfo={this.state.showEditInfo} handleLogOut={this.handleLogOut} /> : <LogInForm user={this.state.user} handleLogInBtn={this.handleLogInBtn} handleSignUpFormSubmit={this.handleSignUpFormSubmit} showSignUpForm={this.state.showSignUpForm} />} />
          <Route exact path="/confirmOrder" render={() => <ConfirmOrder />} />
        </div>
      </Router>
    )
  }
}

export default App;
