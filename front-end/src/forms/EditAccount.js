import React from "react"

export default class EditAccount extends React.Component {
    state = {
        user: { ...this.props.user, password_digest: "*****" }
    }

    handleEmailChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                email: event.target.value
            }
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                password_digest: event.target.value
            }
        })
    }

    handleImgChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                img: event.target.value
            }
        })
    }
    handleImgChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                img: event.target.value
            }
        })
    }

    handleFNameChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                first_name: event.target.value
            }
        })
    }

    handleLNameChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                last_name: event.target.value
            }
        })
    }

    handleStreetChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                street_name: event.target.value
            }
        })
    }

    handleCityChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                city: event.target.value
            }
        })
    }

    handleStateChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                state: event.target.value
            }
        })
    }

    handleZipChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                zip_code: event.target.value
            }
        })
    }

    render() {
        console.log(this.state.user)
        return (
            <div className="EditAccountFormContainer">
                <h1>Update Account Information</h1>
                <div>
                    <form className="EditAccountForm" >
                        Email:<input placeholder="Enter Email..." id="emailInput" name="emailInput" value={this.state.user.email} onChange={(event) => { this.handleEmailChange(event) }} /><br></br>
                        Password:<input placeholder="Enter Password..." id="passwordInput" name="passwordInput" value={this.state.user.password_digest} onChange={(event) => { this.handlePasswordChange(event) }} /><br></br>
                        Image URL:<input placeholder="Enter Image String..." id="imgInput" name="imgInput" value={this.state.user.img} onChange={(event) => { this.handleImgChange(event) }} /><br></br>
                        First Name:<input placeholder="Enter First Name..." id="fNameInput" name="fNameInput" value={this.state.user.first_name} onChange={(event) => { this.handleFNameChange(event) }} /><br></br>
                        Last Name:<input placeholder="Enter Last Name..." id="lNameInput" name="lNameInput" value={this.state.user.last_name} onChange={(event) => { this.handleLNameChange(event) }} /><br></br>
                        Street:<input placeholder="Enter Street..." id="streetInput" name="streetInput" value={this.state.user.street_name} onChange={(event) => { this.handleStreetChange(event) }} /><br></br>
                        City:<input placeholder="Enter City..." id="cityInput" name="cityInput" value={this.state.user.city} onChange={(event) => { this.handleCityChange(event) }} /><br></br>
                        State:<input placeholder="Enter State..." id="stateInput" name="stateInput" value={this.state.user.state} onChange={(event) => { this.handleStateChange(event) }} /><br></br>
                        Zip:<input placeholder="Enter Zip..." id="zipInput" name="zipInput" value={this.state.user.zip_code} onChange={(event) => { this.handleZipChange(event) }} /><br></br>
                        <input type="submit" value="Update Account" className="submitEditAccountBtn" onClick={this.props.handleEditFormSubmit} />
                    </form>
                </div>
                <div>
                    <button onClick={this.props.onClose}> Close </button>
                </div>
            </div>
        )
    }
}