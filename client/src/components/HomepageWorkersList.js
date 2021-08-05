import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import {useState} from 'react';

function HomepageWorkersList({classes, setHomepageView, user}) {
    const [workersMatched, setWorkersMatched] = useState([])

    const handleClick = () => {
        setHomepageView("apptsubmit")
    }
    const matches = user.profile.workers_matched

    return (
        <>
            <h4>Helpers Available within 10 miles of ZIPCODE</h4>
            {matches.map((match) => 
                <Paper className={classes.homepage_bottom}>
                    <Grid item xs={1}/>
                    <Grid item xs={2} className={classes.img}>
                        <img src={`${match.image_url}`}></img>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <span> */}
                            <h4>{match.name}</h4>
                            <h5>Service Prices</h5>
                            <p>Carpentry:</p>
                            <p>Lawncare:</p>
                            <p>Appliance Maintenance:</p>
                            <p>Pest Control:</p>
                            <p>Plumbing:</p>
                        {/* </span> */}
                    </Grid>
                    <Grid item xs={5}>
                        {/* <span> */}
                            <p>Rating: 
                                <Rating name="read-only" defaultValue={match.average_rating} precision={0.5} readOnly/>
                            </p>
                            <p>Reviews: {match.review}</p>
                            <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            >
                            Book
                            </Button>
                        {/* </span> */}
                    </Grid>
                </Paper>
            )}
        </>
    )
}

export default HomepageWorkersList;