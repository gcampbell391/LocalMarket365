import React from "react"

export default class EditAccount extends React.Component {
    render() {
        const user = this.props.user
        return (
            <div className="EditAccountFormContainer">
                <h1>Update Account Information</h1>
                <div>
                    <form className="EditAccountForm" >
                        Email:<input placeholder="Enter Email..." id="emailInput" name="emailInput" value={user.email} /><br></br>
                        Password:<input placeholder="Enter Password..." id="passwordInput" name="passwordInput" value="***" /><br></br>
                        Image URL:<input placeholder="Enter Image String..." id="imgInput" name="imgInput" value={user.img} /><br></br>
                        First Name:<input placeholder="Enter First Name..." id="fNameInput" name="fNameInput" value={user.first_name} /><br></br>
                        Last Name:<input placeholder="Enter Last Name..." id="lNameInput" name="lNameInput" value={user.last_name} /><br></br>
                        Street:<input placeholder="Enter Street..." id="streetInput" name="streetInput" value={user.street_name} /><br></br>
                        City:<input placeholder="Enter City..." id="cityInput" name="cityInput" value={user.city} /><br></br>
                        State:<input placeholder="Enter State..." id="stateInput" name="stateInput" value={user.state} /><br></br>
                        Zip:<input placeholder="Enter Zip..." id="zipInput" name="zipInput" value={user.zip_code} /><br></br>
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