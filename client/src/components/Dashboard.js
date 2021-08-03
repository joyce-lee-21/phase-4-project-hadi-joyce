import DashboardAppt from "./DashboardAppt";
import DashboardEarnings from "./DashboardEarnings";
import DashboardReviews from "./DashboardReviews";
import Welcome from "./Welcome";
import '../assets/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Welcome title="Dashboard" />
            <div className="appointments" >
                <h3>Appointments</h3>

                <div className='children-appointments'>
                    <div className='incoming box'>
                        <b>Incoming Requests</b>
                        <div className='incoming-list'>
                            <ul>
                                <li>JOHHN DOE</li>
                                <li>[ADDRESS]</li>
                                <li>[SERVICES]</li>
                                <li>TOTAL COST: <b>$5</b></li>
                            </ul>

                            <button>Accept</button>
                        </div>

                        <div className='incoming-list'>
                            <ul>
                                <li>JOHHN DOE</li>
                                <li>[ADDRESS]</li>
                                <li>[SERVICES]</li>
                                <li>TOTAL COST: <b>$5</b></li>
                            </ul>

                            <button>Accept</button>
                        </div>
                    </div>


                    <div className='upcoming box'>
                        <b>Upcoming</b>
                        <ul>
                            <li>JOHHN DOE</li>
                            <li>[ADDRESS]</li>
                            <li>[SERVICES]</li>
                            <li>TOTAL COST: <b>$5</b></li>
                        </ul>

                        <ul>
                            <li>JOHHN DOE</li>
                            <li>[ADDRESS]</li>
                            <li>[SERVICES]</li>
                            <li>TOTAL COST: <b>$5</b></li>
                        </ul>

                    </div>

                    <div className='completed box'>
                        <b>Completed</b>
                        <ul>
                            <li>JOHHN DOE</li>
                            <li>[ADDRESS]</li>
                            <li>[SERVICES]</li>
                            <li>TOTAL COST: <b>$5</b></li>
                        </ul>

                        <div className='randr'>
                            <p>Rating: 5.0</p>
                            <p>Review: lorem ipsum hgfgefgg fruifrfr
                                iu userBlockin
                                gPairsForSimpleEvhrffrvhfh ffruiri
                                rufiu fefiue
                                entPlugin</p>
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