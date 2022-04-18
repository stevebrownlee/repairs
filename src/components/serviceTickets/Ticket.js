import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"

export const Ticket = () => {
    const [ticket, set] = useState({})  // State variable for current ticket object
    const [employees, syncEmployees] = useState([])  // State variable for array of employees
    const { ticketId } = useParams()  // Variable storing the route parameter

    // Function to fetch a single ticket, with customer and employee embedded
    const fetchTicket = () => {
        return fetchIt(`http://localhost:8000/tickets/${ticketId}`)
            .then(set)
    }

    // Invoke fetchTicket() when the parameter value changes
    useEffect(
        () => {
            fetchTicket()
        },
        [ ticketId ]  // Above function runs when the value of ticketId change
    )

    useEffect(
        () => {
            fetchIt("http://localhost:8000/employees")
                .then(syncEmployees)
        },
        []  // Empty dependency array only reacts to JSX initial rendering
    )

    // Function to invoke when an employee is chosen from <select> element
    const updateTicket = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            employee: parseInt(evt.target.value),
        }

        // Perform the PUT HTTP request to replace the resource
        fetchIt(
            `http://localhost:8000/tickets/${ticketId}`,
            {
                method: "PUT",
                body: JSON.stringify(updatedTicket)
            }
        ).then(fetchTicket)
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.full_name}</div>
                <div className="ticket__employee">Assigned to {" "}
                    <select
                        value={ ticket.employee.id } // TODO: value={ ticket.employeeId }
                        onChange={ updateTicket }>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
