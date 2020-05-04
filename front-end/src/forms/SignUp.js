import React from "react"

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="SignUpFormContainer">
                <h1>Sign Up Form</h1>
                <div>
                    <form className="SignUpForm" >
                        Email:<input placeholder="Enter Email..." id="emailInput" name="emailInput" /><br></br>
                        Password:<input placeholder="Enter Password..." id="passwordInput" name="passwordInput" /><br></br>
                        Image URL:<input placeholder="Enter Image String..." id="imgInput" name="imgInput" /><br></br>
                        First Name:<input placeholder="Enter First Name..." id="fNameInput" name="fNameInput" /><br></br>
                        Last Name:<input placeholder="Enter Last Name..." id="lNameInput" name="lNameInput" /><br></br>
                        Street:<input placeholder="Enter Street..." id="streetInput" name="streetInput" /><br></br>
                        City:<input placeholder="Enter City..." id="cityInput" name="cityInput" /><br></br>
                        State:<input placeholder="Enter State..." id="stateInput" name="stateInput" /><br></br>
                        Zip:<input placeholder="Enter Zip..." id="zipInput" name="zipInput" /><br></br>
                        <input type="submit" value="Create Account" className="signUpBtn" onClick={(event) => this.props.handleSignUpFormSubmit(event)} />
                    </form>
                </div>
                <div>
                    <button onClick={this.props.onClose}> Close </button>
                </div>
            </div>
        )
    }
}