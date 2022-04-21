import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"
import { isStaff } from "../../utils/isStaff"

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
        [ticketId]  // Above function runs when the value of ticketId change
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

    const employeePicker = (ticket) => {
        if (isStaff()) {
            return <div className="ticket__employee">Assigned to {" "}
                <select
                    value={ticket?.employee?.id} // TODO: value={ ticket.employeeId }
                    onChange={updateTicket}>
                    {
                        employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                    }
                </select>
            </div>
        }
        else {
            return <div className="ticket__employee">Assigned to {ticket?.employee.full_name}</div>
        }
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">Description</h3>
                <div>{ticket.description}</div>

                <footer className="ticket__footer ticket__footer--detail">
                    <div className=" footerItem">Submitted by {ticket.customer?.full_name}</div>
                    <div className="ticket__employee footerItem">
                        {
                            ticket.date_completed === null
                                ? employeePicker(ticket)
                                : `Completed by ${ticket.employee?.name} on ${ticket.date_completed}`
                        }
                    </div>
                    <div className="footerItem">
                        {
                            ticket.date_completed === null
                                ? <span className="status--in-progress">In progress</span>
                                : ""
                        }
                    </div>
                </footer>

            </section>
        </>
    )
}
