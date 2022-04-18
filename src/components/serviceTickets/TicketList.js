import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    useEffect(() => {
        fetchIt("http://localhost:8000/tickets").then(updateTickets)
    }, [])

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.date_completed === null).length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    return (
        <>
            <div className="actions">
                <button className="actions__create" onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div className="activeTickets">
                {active}
            </div>
            <article className="tickets">
                {
                    tickets.map(
                        (ticket) => {
                            return <section
                                className={`ticket ${ticket.emergency ? 'emergency' : ''}`}
                                key={`ticket--${ticket.id}`}>
                                <header className="ticket__header">
                                    <div className="ticket__customer">
                                        <Link to={`/tickets/${ticket.id}`}>Ticket #{ticket.id}</Link>: {ticket.customer.full_name}
                                    </div>
                                </header>
                                <p className="ticket__body">
                                    <i className="ticket__icon">{ticket.emergency ? "🚑" : ""}</i>
                                    {ticket.description}
                                </p>
                                <footer className="ticket__footer">
                                    <div className="ticket__employee">
                                        {
                                            ticket.date_completed === null
                                                ? `Assigned to ${ticket.employee.name}`
                                                : `Completed by ${ticket.employee.name} on ${ticket.date_completed}`
                                        }
                                    </div>
                                    <div>
                                        {
                                            ticket.date_completed === null
                                                ? <span className="status--in-progress">In progress</span>
                                                : ""
                                        }
                                    </div>
                                </footer>
                            </section>
                        }
                    )
                }
            </article>
        </>
    )
}