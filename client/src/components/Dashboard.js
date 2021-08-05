import { useEffect, useState } from "react";
import DashboardAppt from "./DashboardAppt";
import DashboardEarnings from "./DashboardEarnings";
import DashboardReviews from "./DashboardReviews";
import Welcome from "./Welcome";
import '../assets/Dashboard.css'
import { getAppointments } from "../services/appointments";


function Dashboard() {

    const workers=[]
 
    const [requestedAppointments, setRequestedAppointments]= useState([])
    const [upcomingAppointments, setUpcomingAppointments]= useState([])
    const [singleAppointment, setSingleAppointment] = useState({})
    useEffect(() => {
       getAppointments("requested").then((appointments=>setRequestedAppointments(appointments)))
       getAppointments("confirmed").then((appointments=>setUpcomingAppointments(appointments)))
    }, [])


    const handleAccept = (appointment) => {
        setSingleAppointment(appointment)
        console.log(appointment)
    }

    return (
        <div className="dashboard">
            <Welcome title="Dashboard" />
            <div className="appointments" >
                <h3>Appointments</h3>

                <div className='children-appointments'>
                    <div className='incoming box'>
                        <b>Incoming Requests</b>
                      
                            {requestedAppointments.map(appointment=>{
                                  return <div className='incoming-list'>
                                <ul>
                                <li>{appointment.worker.name}</li>
                                <li>{"address"}</li>
                                <li>{appointment.services}</li>
                                <li>TOTAL COST: <b>{appointment.total_cost}</b></li>
                                <li><button onClick={() => handleAccept(appointment)}>accept</button></li>
                            </ul>
                              </div>

                            })}
                          
                    </div>


                    <div className='upcoming box'>
                        <b>Upcoming</b>
                        {singleAppointment.id && 
                                   <div className='incoming-list'>
                                <ul>
                                <li>{singleAppointment.worker.name}</li>
                                <li>{"address"}</li>
                                <li>{singleAppointment.services}</li>
                                <li>TOTAL COST: <b>{singleAppointment.total_cost}</b></li>
                                
                            </ul>
                              </div>

                            }

                    </div>

                    <div className='completed box'>
                        <b>Completed</b>
                        <ul>
                            <li>worker.name</li>
                            <li>worker.address</li>
                            <li>worker.services.map(service=>service.service).join(",")}</li>
                            <li>TOTAL COST: <b></b></li>
                        </ul>

                        <div className='randr'>
                            <p>worker.rating</p>
                            <p>worker.review</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='earnings'>

                <b>Earnings</b>

                <ul>
                    <li>Total: </li>
                    <li>Appointment Charges: </li>
                    <li>Tips: </li>
                </ul>
            </div>
            <div className='reviews'>
                <b>Reviews</b>
                <p>
                    <span>[CUSTOMER USERNAME]</span>
                    <span>[RATING] : </span>
                    loenrhjrh efiuriur4riu4 4iut4r4
                    euyr34ryuy4ry r4ru4i4iurr4iru rrjkfrjkjkgfr fjk
                    t4iopttoi4t4i4ot4ijot r4tij4otio
                    fu44iurr4r4i4r ffiuriuiu
                </p>

                <p>
                    <span>[CUSTOMER USERNAME]</span>
                    <span>[RATING] : </span>
                    loenrhjrh efiuriur4riu4 4iut4r4
                    euyr34ryuy4ry r4ru4i4iurr4iru rrjkfrjkjkgfr fjk
                    t4iopttoi4t4i4ot4ijot r4tij4otio
                    fu44iurr4r4i4r ffiuriuiu
                </p>
            </div>

        </div>
    )
}

export default Dashboard;