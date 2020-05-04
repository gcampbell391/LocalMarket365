import React from "react"
import Header from "../containers/Header"
import UserAccountHome from "../components/UserAccountHome"
import SignUp from "./SignUp"
//Search Component includes onChange event for the forms input to filter products 
class LogIn extends React.Component {
    state = {
        user: this.props.user,
        showSignUpForm: this.props.showSignUpForm
    }

    handleSignUpFormToggle = () => {
        this.setState({ showSignUpForm: true })
    }
    onClose = () => {
        console.log("cloicked")
        this.setState({ showSignUpForm: false })
    }

    render() {
        console.log("Log In User:", this.state.user)
        return (
            <div>
                <Header />
                {this.state.user ? <UserAccountHome user={this.state.user} />
                    :
                    <div className="loginFormBody">
                        <h1>Log In or Sign Up Today</h1>
                        <form className="loginForm" >
                            <label id="loginLabel" >Email: </label>
                            <input placeholder="Enter Email Here..." id="loginEmailInput" name="emailInput" /><br></br>
                            <label id="passwordLabel" >Password: </label>
                            <input placeholder="Enter Password Here..." id="loginPasswordInput" name="passwordInput" />
                            <input type="submit" value="Log In" className="logInBtn" onClick={(event) => this.props.handleLogInBtn(event)} />
                        </form>
                    </div>
                }
                <div className="signupBox">
                    <h3>Don't Have an Account?</h3>
                    <button className="createNewAccountBtn" onClick={this.handleSignUpFormToggle}>Sign Up Today!</button>
                </div>
                {this.state.showSignUpForm && <SignUp onClose={this.onClose} handleSignUpFormSubmit={this.props.handleSignUpFormSubmit} />}
            </div>
        )
    }
}

export default LogIn