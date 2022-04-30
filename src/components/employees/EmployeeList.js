import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"

export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetchIt("http://localhost:8000/employees")
                .then(changeEmployees)
                .catch(() => changeEmployees([]))
        },
        []
    )

    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [employees])


    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>

            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <Link key={`employee--${employee.id}`} to={`employees/${employee.id}`}>
                            <p >{employee.name}</p>
                        </Link>
                    }
                )
            }
        </>
    )
}