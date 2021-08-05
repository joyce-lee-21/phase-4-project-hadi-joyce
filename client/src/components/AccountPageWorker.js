import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, {useState} from "react";

function AccountPageWorker({classes, user}) {
    const [name, setName] = useState(user.profile.name)
    const [location, setLocation] = useState(user.profile.location)
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState(user.password_digest)
    const [img, setImg] = useState(user.profile.image_url)
    const [view, setView] = useState("view")
    const [yardworkPrice, setYardworkPrice] = useState(user.services[0].price)
    const [plumberPrice, setPlumberPrice] = useState(user.services[1].price)
    const [carpenterPrice, setCarpenterPrice] = useState(user.services[2].price)
    const [pestPrice, setPestPrice] = useState(user.services[3].price)
    const [appliancePrice, setAppliancePrice] = useState(user.services[4].price)
    const [newPrice, setNewPrice] = useState({
        service: "",
        price: 0
    })

    const handleAccountEdit = () => {
        setView("edit")
    }

    const onNewPrice = (e, serviceName) => {
        setNewPrice({
            service: serviceName,
            price: parseInt(e.target.value)
        })
    }

    const handleAccountUpdates = (e) => {
        e.preventDefault();
        // async function updateAccount(){
        //     const res = await fetch("/login", {
        //         method: "POST",
        //         headers: {
        //         "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ 
        //             username, 
        //             password 
        //             }),
        //     })
        //     if(res.ok){
        //         const user = await res.json()
        //         onLogin(user)
        //         history.push('/account')
        //     } else {
        //         const err = await res.json()
        //         setErrors(err.errors)
        //     }
        // };
        // updateAccount()
        // setView("view")
    }

    // console.log(user.services[1])
    return (
        <div>
            {view === "view"
                ? 
                <div className="account-container">
                    <h2>Helper Account Details</h2>
                    <img src={`${user.profile.image_url}`}></img>
                    <br></br>
                    <p>Name: {user.profile.name}</p>
                    <p>Location: {user.profile.location}</p>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                    <br></br>
                    <h4>Service Prices</h4>
                    {user.services.map(service => {
                        const s = service.service
                        return (<p key={`${s}`}>{`${s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()}: $${service.price}`}</p>)
                    })}
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
                    <form className={classes.form} noValidate onSubmit={(e)=>handleAccountUpdates(e)}>
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Name"
                            // autoFocus
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            value={name}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="location"
                            label="Location"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            value={location}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            value={username}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            // onChange={(e)=>{setEnterLoginPD(e.target.value)}}
                            value={password}
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="image"
                            label="Image URL"
                            // onChange={(e)=>{setEnterLoginUsername(e.target.value)}}
                            value={img}
                        />
                        <h4>Service Prices</h4>
                        {/* {user.services.map(service => {
                            const s = service.service
                            return (
                                (<TextField
                                    key={`${s}`}
                                    variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id={`${s}`}
                                    label={`Current ${s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()} Price: $${service.price}`}
                                    onChange={(e, serviceName=`${s}`)=>onNewPrice(e, serviceName)}
                                />)
                            )
                        })} */}
                        <TextField
                            key="yardwork"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="yardwork"
                            label="Yardwork Price:"
                            onChange={(e)=>setYardworkPrice(e.target.value)}
                            value={yardworkPrice}
                        />
                        <TextField
                            key="plumber"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="plumber"
                            label="Plumber Price:"
                            onChange={(e)=>setPlumberPrice(e.target.value)}
                            value={plumberPrice}
                        />
                        <TextField
                            key="carpenter"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="carpenter"
                            label="Carpenter Price:"
                            onChange={(e)=>setCarpenterPrice(e.target.value)}
                            value={carpenterPrice}
                        />
                        <TextField
                            key="pest"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="pest"
                            label="Pest Control Price:"
                            onChange={(e)=>setPestPrice(e.target.value)}
                            value={pestPrice}
                        />
                        <TextField
                            key="appliance"
                            variant="filled"
                            margin="normal"
                            fullWidth
                            id="appliance"
                            label="Appliance Price:"
                            onChange={(e)=>setAppliancePrice(e.target.value)}
                            value={appliancePrice}
                        />
                        <div className="edit-btn-grp">
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                // onClick={handleAccountView}
                            >
                                Save
                            </Button>
                            <Button 
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={()=>setView("view")}
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