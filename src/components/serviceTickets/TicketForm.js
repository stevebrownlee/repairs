import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';

export const TicketForm = () => {
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });

    const history = useHistory();

    const saveTicket = (event) => {
        event.preventDefault()

        if (ticket.description === "") {
            window.alert("Please enter a description for the ticket")
        } else {
            const fetchOptions = {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    description: ticket.description,
                    emergency: ticket.emergency,
                    customerId: parseInt(localStorage.getItem("honey_customer")),
                    employeeId: 1
                })
            }
            return fetch("http://localhost:8088/serviceTickets", fetchOptions)
                .then(res => res.json())
                .then(() => history.push("/tickets"))
        }
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={(evt) => {
                            const copy = {...ticket}
                            copy.description = evt.target.value
                            update(copy)
                        }}
                        required autoFocus
                        type="text" id="description"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={ticket.description} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        onChange={(evt) => {
                            const copy = {...ticket}
                            copy.emergency = evt.target.checked
                            update(copy)
                        }}
                        type="checkbox"
                        id="breed"
                        checked={ticket.emergency} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}