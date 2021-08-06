import { useEffect, useState } from "react";
import DashboardAppt from "./DashboardAppt";
import DashboardEarnings from "./DashboardEarnings";
import DashboardReviews from "./DashboardReviews";
import Welcome from "./Welcome";
import '../assets/Dashboard.css'
import { getAppointments, acceptAppointment , getAppointmentsSummary} from "../services/appointments";


function Dashboard() {

 
    const [requestedAppointments, setRequestedAppointments]= useState([])
    const [upcomingAppointments, setUpcomingAppointments]= useState([])
    const [completedAppointments, setCompletedAppointments]= useState([])
    
    const [appointmentSummary, setAppointmentSummary]= useState({total_cost:0, tips:0})

    const loadAppointments=()=>{
        getAppointments("requested").then((appointments=>setRequestedAppointments(appointments)))
        getAppointments("accepted").then((appointments=>setUpcomingAppointments(appointments)))
        getAppointments("completed").then((appointments=>setCompletedAppointments(appointments)))
        getAppointmentsSummary().then(summary=>setAppointmentSummary(summary)) 
    }
    useEffect(() => {
     loadAppointments()
    }, [])


    const handleAccept = (appointment) => {
        acceptAppointment(appointment.id).then(()=>{
            loadAppointments()
        }).catch((e)=>{alert("Couldn't accept appointment")})
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
                                <li>ID: {appointment.id}</li>
                                <li>Status: {appointment.status}</li>
                                <li>Name: {appointment.worker.name}</li>
                                <li>Services Offered: {appointment.services}</li>
                                <li>TOTAL COST: <b>{appointment.total_cost}</b></li>
                                <li><button onClick={() => handleAccept(appointment)}>Accept</button></li>
                            </ul>
                              </div>

                            })}                          
                    </div>

                    <div className='upcoming box'>
                        <b>Upcoming</b>
                        {upcomingAppointments.map(appointment=>{
                                  return <div className='incoming-list'>
                                <ul>
                                <li>ID: {appointment.id}</li>
                                <li>Status: {appointment.status}</li>
                                <li>Name: {appointment.worker.name}</li>
                                <li>Services Offered: {appointment.services}</li>
                                <li>TOTAL COST: <b>{appointment.total_cost}</b></li>
                                <li><button onClick={() => handleAccept(appointment)}>Mark as complete</button></li>
                            </ul>
                              </div>

                            })}

                    </div>

                    <div className='completed box'>
                        <b>Completed</b>
                        {completedAppointments.map(appointment=>{
                                  return <div className='incoming-list'>
                                <ul>
                                <li>ID: {appointment.id}</li>
                                <li>Status: {appointment.status}</li>
                                <li>Name: {appointment.worker.name}</li>
                                <li>Services Offered: {appointment.services}</li>
                                <li>Total Cost: <b>{appointment.total_cost}</b></li>
                                <li>Tip Amount: <b>{appointment.tip}</b></li>
                            </ul>
                              </div>

                            })}
                    </div>
                </div>
            </div>

            <div className='earnings'>

                <b>Earnings</b>

                <ul>
                    <li>Total: <b>{appointmentSummary.total_cost+appointmentSummary.tips}</b></li>
                    <li>Appointment Charges: <b>{appointmentSummary.total_cost}</b></li>
                    <li>Tips: <b>{appointmentSummary.tips}</b></li>
                </ul>
            </div>
            {/* <div className='reviews'>
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
            </div> */}

        </div>
    )
}

export default Dashboard;