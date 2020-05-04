import React from "react"
import Header from "../containers/Header"

const UserAccountHome = (props) => {
    console.log(props)
    return (
        <div>
            <Header />
            <div className="userAccountCard">
                <h1>Welcome, {props.user.first_name}!</h1>
                <img src={props.user.img} alt="User Pictute" height="300" width="300"></img>
                <h2>Current Information</h2>
                <div className="userMinorDetails">
                    <p>Email: {props.user.email}</p>
                    <p>First Name: {props.user.first_name}</p>
                    <p>Last Name: {props.user.last_name}</p>
                </div>
                <h3>Address</h3>
                <div className="userMinorDetails">
                    <p>Street: {props.user.street_name}</p>
                    <p>City: {props.user.city}</p>
                    <p>State: {props.user.state}</p>
                    <p>Zip: {props.user.zip_code}</p>
                </div>
                <button>Edit Info</button>

            </div>
        </div>
    )
}

export default UserAccountHome