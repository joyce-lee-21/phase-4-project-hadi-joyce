import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AccountPageCustomer({classes, user, accountChanges}) {
    const history = useHistory();
    const [name, setName] = useState(user.profile.name)
    const [location, setLocation] = useState(user.profile.location)
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState(user.password)
    const [budget, setBudget] = useState(user.profile.budget)
    const [img, setImg] = useState(user.profile.image_url)
    const [view, setView] = useState("view")
    const [errors, setErrors] = useState([])

    const handleAccountUpdates = (e) => {
        e.preventDefault();
        async function updateAccount(){
            const res = await fetch(`/account/${user.id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    profile_id: user.profile.id,
                    profile_type: user.profile_type,
                    name,
                    location,
                    budget,
                    username, 
                    password,
                    image_url: img
                }),
            })
            if(res.ok){
                const user = await res.json()
                accountChanges(user)
                history.push('/account')
            } else {
                const err = await res.json()
                setErrors(err.errors)
            }
        };
        updateAccount()
        setView("view")
    }

    const onView = (value) => {
        setView(value)
    }

    console.log(user)

    return (
        <div>
            {view === "view"
                ?
                <div className="account-container">
                    <img src={`${user.profile.image_url}`}></img>
                    <h2>Customer Account Details</h2>
                    <p>Name: {user.profile.name}</p>
                    <p>Location: {user.profile.location}</p>
                    <p>Budget/Month: ${user.profile.budget}</p>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={()=>{onView("edit")}}
                    >
                        Edit
                    </Button>
                </div>
                : 
                <div className="account-container">
                    <h2>Edit Customer Account Details</h2>
                        <form className={classes.form} noValidate onSubmit={(e)=>handleAccountUpdates(e)}>
                            <TextField
                                variant="filled"
                                margin="normal"
                                fullWidth
                                id="name"
                                label="Name"
                                onChange={(e)=>{setName(e.target.value)}}
                                value={name}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="location"
                                label="Location (Postal Code)"
                                autoFocus
                                onChange={(e)=>{setLocation(e.target.value)}}
                                value={location}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="budget"
                                label="Budget/Month"
                                autoFocus
                                onChange={(e)=>{setBudget(e.target.value)}}
                                value={budget}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                                onChange={(e)=>{setUsername(e.target.value)}}
                                value={username}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                // required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                value={password}
                            />
                            <TextField
                                variant="filled"
                                margin="normal"
                                fullWidth
                                id="image"
                                label="Image URL"
                                autoFocus
                                onChange={(e)=>{setImg(e.target.value)}}
                                value={img}
                            />
                            {errors ? errors.map((error) => (
                                <p>{error}</p>
                            ))
                            : null}
                            <div className="edit-btn-grp">
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={(e)=>{handleAccountUpdates(e)}}
                                >
                                    Save
                                </Button>
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={()=>{onView("view")}}
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

export default AccountPageCustomer;