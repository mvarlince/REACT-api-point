import React, {useState} from "react";
import './roster.css'

export default function Roster(){
    const [student, setStudent] = useState([])
    return (
        <>
            <div className="main">
                <h1>Student Roster</h1>
                <div className="student-card">{student.map( students =>{
                        return(
                            <>
                            <h5>{students.first_name} {students.last_name}</h5>
                            <div>
                            <ul className="bullet-points">
                                <li>email: {students.email}</li>
                                <li>gender: {students.gender}</li>
                                <li>ip_address: {students.ip_address}</li>
                            </ul>
                            </div>
                            </>
                            )
                        })} </div>

                <button onClick={ () =>
                fetch("https://c9-firebase-express-depoly.web.app/getall")
                .then(res => res.json())
                .then(setStudent)
                .catch(console.error)
                }> Populate Students </button>
            </div>
        </>
    )
}