import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import HomepageWorkersList from "./HomepageWorkersList";
import HomepageApptComplete from "./HomepageApptComplete";
import HomepageApptSubmit from "./HomepageApptSubmit";

function Homepage({classes, user}) {
    const [homepageView, setHomepageView] = useState("list") //options for list, apptcomplete, apptsubmit
    const [apptsArr,setApptsArr] = useState([])
    const [apptsReq, setApptsReq] = useState([])
    const [apptsCompleted, setApptsCompleted] = useState([])
    const [errors, setErrors] = useState([])

    const onMarkComplete = () => {
        setHomepageView("apptcomplete");
    }

    // FETCH GET A LIST OF WORKERS MATCHED TO THIS CUSTOMER

    // FETCH GET THE APPOINTMENTS FOR THIS CUSTOMER
    useEffect(() => {
        async function getAppts(){
            const res = await fetch(`/home/${user.id}`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                }
            })
            if(res.ok){
                const appts = await res.json()
                // console.log(appts.map((appt) => {
                //     let arr = [];
                //     for (var i = 0; i < appt.services.length; i++) {
                //         arr.push(appt.services[i]);
                //     }
                //     arr.toString();
                // }))
                // console.log(appts.filter((appt) => appt.status === "confirmed"))
                // console.log(appts.filter((appt) => appt.status === "requested"))
                // console.log(appts.filter((appt) => appt.status === "completed"))
                setApptsArr(appts.filter((appt) => appt.status === "confirmed"))
                setApptsReq(appts.filter((appt) => appt.status === "requested"))
                setApptsCompleted(appts.filter((appt) => appt.status === "completed"))
            } else {
                const err = await res.json()
                setErrors(err.errors)
            }
        };
        getAppts()
    }, []);

    console.log(user)

    return (
        <>
            <div className="homepage-top">
                <Grid item xs={4}>
                    <Paper className={classes.homepage_top}>
                        <h4>Requested</h4>
                        {apptsReq.map((appt) => 
                        // {let arr = [];
                        // arr.push(appt.services);
                            (<Paper className={classes.homepage_toplist}>
                                <span>
                                    <p>Name: {appt.worker.name}</p>
                                    <p>Services: {appt.services}</p>
                                    <p>Total Cost: ${appt.total_cost}</p>
                                </span>
                            </Paper>)
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.homepage_top}>
                        <h4>Upcoming</h4>
                        {apptsArr.map((appt) => 
                            (<Paper className={classes.homepage_toplist}>
                                <span>
                                    <p>Name: {appt.worker.name}</p>
                                    <p>Services: {appt.services}</p>
                                    <p>Total Cost: ${appt.total_cost}</p>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={onMarkComplete}
                                    >
                                        Mark as Complete
                                    </Button>
                                </span>
                            </Paper>)
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.homepage_top}>
                        <h4>Completed</h4>
                        {apptsCompleted.map((appt) => 
                            (<Paper className={classes.homepage_toplist}>
                                <span>
                                    <p>Name: {appt.worker.name}</p>
                                    <p>Services: {appt.services}</p>
                                    <p>Total Cost: ${appt.total_cost}</p>
                                    <p>Rating: {appt.rating}</p>
                                    <p>Review: {appt.review}</p>
                                </span>
                            </Paper>)
                        )}
                    </Paper>
                </Grid>
            </div>
            <div className="homepage-bottom">
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.homepage_top}>
                            {homepageView === "list"
                                ?<HomepageWorkersList classes={classes} setHomepageView={setHomepageView} user={user}/>
                                :homepageView === "apptcomplete"
                                    ?<HomepageApptComplete classes={classes} setHomepageView={setHomepageView} user={user}/>
                                    :<HomepageApptSubmit classes={classes} setHomepageView={setHomepageView} user={user}/>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Homepage;