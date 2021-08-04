import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function AccountPageWorker({classes, view, setView, user}) {
    const handleAccountEdit = () => {
        setView("edit")
    }

    const handleAccountView = () => {
        setView("view")
    }

    return (
        <div>
            {view === "view"
                ? 
                <div className="account-container">
                    <h2>Helper Account Details</h2>
                    <img src={user.profile.image_url}></img>
                    <br></br>
                    <p>Name: {user.profile.name}</p>
                    <p>Location: {user.profile.location}</p>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                    <br></br>
                    <h4>Service Prices</h4>
                    <p>Carpentry: </p>
                    <p>Lawncare:</p>
                    <p>Appliance Maintenance:</p>
                    <p>Pest Control:</p>
                    <p>Plumbing:</p>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleAccountEdit}
                    >
                        Edit
                    </Button>
                </div>
                : 
                <div className="account-container">
                    <h2>Edit Helper Account Details</h2>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="name"
                            label="Name"
                            // autoFocus
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="location"
                            label="Location"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="username"
                            label="Username"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            // onChange={(e)=>{setEnterLoginPD(e.target.value)}}
                            // value={enterLoginPD}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="image"
                            label="Image URL"
                            autoFocus
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <h4>Service Prices</h4>
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="budget"
                            label="Carpentry Price"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="budget"
                            label="Lawncare Price"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="budget"
                            label="Appliance Maintenance Price"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="budget"
                            label="Pest Control Price"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            // required
                            fullWidth
                            id="budget"
                            label="Plumbing Price"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            // value={enterLoginUsername}
                        />
                        <div className="edit-btn-grp">
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleAccountView}
                            >
                                Save
                            </Button>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleAccountView}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
};

export default AccountPageWorker;