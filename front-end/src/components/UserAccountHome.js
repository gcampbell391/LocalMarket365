import React from "react"
import Header from "../containers/Header"
import EditAccount from "../forms/EditAccount"

class UserAccountHome extends React.Component {

    state = {
        showEditInfo: false
    }



    handleEditClick = () => {
        this.setState({ showEditInfo: !this.state.showEditInfo })
    }

    onClose = () => {
        this.setState({ showEditInfo: false })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="userAccountCard">
                    <h1>Welcome, {this.props.user.first_name}!</h1>
                    <img src={this.props.user.img} alt="User Pictute" height="300" width="300"></img>
                    <h2>Current Information</h2>
                    <div className="userMinorDetails">
                        <p>Email: {this.props.user.email}</p>
                        <p>First Name: {this.props.user.first_name}</p>
                        <p>Last Name: {this.props.user.last_name}</p>
                    </div>
                    <h3>Address</h3>
                    <div className="userMinorDetails">
                        <p>Street: {this.props.user.street_name}</p>
                        <p>City: {this.props.user.city}</p>
                        <p>State: {this.props.user.state}</p>
                        <p>Zip: {this.props.user.zip_code}</p>
                    </div>
                    <button onClick={this.handleEditClick}>Edit Info</button>
                </div>
                {this.state.showEditInfo && <EditAccount user={this.props.user} handleEditFormSubmit={this.props.handleEditFormSubmit} onClose={this.onClose} />}
            </div>
        )
    }
}

export default UserAccountHome