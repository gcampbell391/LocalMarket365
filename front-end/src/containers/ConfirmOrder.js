import React, { Component } from 'react'
import Map from "../components/map"


export default class ConfirmOrder extends Component {

    render() {
        return(

            <div>
                <h3> Schedule a time for pickup</h3>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>
                <h3> Location </h3>
                <Map />

            </div>


        )
    }

}