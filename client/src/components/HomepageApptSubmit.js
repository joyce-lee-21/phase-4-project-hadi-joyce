import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React, {useState} from "react";

function HomepageApptSubmit({classes, setHomepageView}) {
    const [services, setService] = useState([])
    const [timeslot, setTimeslot] = useState("")

    const handleAppt = (e) => {
        console.log(e)
    }

    const onAddService = (e, value) => {
        setService([...services, value])
    }

    const onSelectedTimeslot = (e) => {
        setTimeslot(e.target.textContent)
    }
    console.log(services)

    return (
        <>
        <h4>Submit Appointment Request</h4>
            {/* For each helper matched, create a new list item */}
                <Paper className={classes.homepage_bottom}>
                    <Grid item xs={1}/>
                    <Grid item xs={3}>
                        <h5>Service Prices: </h5>
                        <p>
                            <IconButton className={classes.button} >
                                <AddCircleIcon onClick={(e, value="carpenter")=>onAddService(e, value)}/>
                            </IconButton>
                            Carpentry: 
                        </p>
                        <p>
                            <IconButton className={classes.button}>
                                <AddCircleIcon onClick={(e, value="yardwork")=>onAddService(e, value)}/>
                            </IconButton>
                            Lawncare:
                        </p>
                        <p>
                            <IconButton className={classes.button}>
                                <AddCircleIcon onClick={(e, value="appliance")=>onAddService(e, value)}/>
                            </IconButton>
                            Appliance Repair:
                        </p>
                        <p>
                            <IconButton className={classes.button}>
                                <AddCircleIcon onClick={(e, value="pestcontrol")=>onAddService(e, value)}/>
                            </IconButton>
                            Pest Control:
                        </p>
                        <p>
                            <IconButton className={classes.button}>
                                <AddCircleIcon onClick={(e, value="plumber")=>onAddService(e, value)}/>
                            </IconButton>
                            Plumbing:
                        </p>
                    </Grid>
                    <Grid item xs={7}>
                        <h5>Timeslots Available: </h5>
                        <Grid container>
                            {/* map timeslot times to below */}
                            <Grid item xs={2}>
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.timeslot}
                                    onClick={onSelectedTimeslot}
                                    >
                                TIME
                                </Button>
                            </Grid>                     
                        </Grid>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e)=>{handleAppt(e)}}
                            >
                        Submit Appointment Request
                        </Button>
                    </Grid>
                </Paper>
        </>
    )
}

export default HomepageApptSubmit;