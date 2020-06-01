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
    showEditInfo: false,
    cart: []
  }

  getBelowCart = (cart) => {
    this.setState({ cart: cart })
  }


  componentDidMount() {
    const md5 = require('md5');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const api_key = "g0td0myfl3tz9lsoc29yzr38"
    const sig = md5(`${api_key}9albn7kas0z6holeinfo`)
    const fetchUrl = `https://www.dgcoursereview.com/api_test/?key=${api_key}&mode=holeinfo&id=11&sig=${sig}`
    console.log("Sig", fetchUrl)

    fetch(proxyurl + fetchUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log("Course Info:", data)
      })
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

  handleCheckoutBtn = (time) => {

    let cartArray = []
    this.state.cart.forEach(item => {

      let obj = {
        productid: item.product.id,
        quantity: item.quantity
      }
      cartArray.push(obj)
    })
    fetch("http://localhost:3000/purchases/new", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: cartArray }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ cart: [] })
        alert(`Thank you for shopping at Market360. Please be sure pick up your order at ${time}`)

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    console.log("Current App Cart", this.state.cart)
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home user={this.state.user} getBelowCart={this.getBelowCart} />} />
          <Route exact path="/log_in" render={() => this.state.user ? <UserAccountHome user={this.state.user} handleEditFormSubmit={this.handleEditFormSubmit} showEditInfo={this.state.showEditInfo} handleLogOut={this.handleLogOut} /> : <LogInForm user={this.state.user} handleLogInBtn={this.handleLogInBtn} handleSignUpFormSubmit={this.handleSignUpFormSubmit} showSignUpForm={this.state.showSignUpForm} />} />
          <Route exact path="/confirmOrder" render={() => <ConfirmOrder cart={this.state.cart} handleCheckoutBtn={this.handleCheckoutBtn} user={this.state.user} />} />
        </div>
      </Router>
    )
  }
}

export default App;
