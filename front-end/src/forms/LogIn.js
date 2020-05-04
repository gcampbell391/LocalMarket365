import React from "react"
import Header from "../containers/Header"
//Search Component includes onChange event for the forms input to filter products 
class LogIn extends React.Component {
    state = {
        user: null
    }

    handleLogInClick = (event) => {
        event.preventDefault()
        const userEmail = event.target.parentElement.querySelector("#loginEmailInput").value
        const userPassword = event.target.parentElement.querySelector("#loginPasswordInput").value
        console.log("User Email: ", userEmail)
        console.log("User Password: ", userPassword)
        event.target.parentElement.reset()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="loginFormBody">
                    <h1>Log In or Sign Up Today</h1>
                    <form className="loginForm" >
                        <label id="loginLabel" >Email: </label>
                        <input placeholder="Enter Email Here..." id="loginEmailInput" name="emailInput" /><br></br>
                        <label id="passwordLabel" >Password: </label>
                        <input placeholder="Enter Password Here..." id="loginPasswordInput" name="passwordInput" />
                        <input type="submit" value="Submit" className="logInBtn" onClick={(event) => this.handleLogInClick(event)} />
                    </form>
                </div>

            </div>
        )
    }
}

export default LogIn