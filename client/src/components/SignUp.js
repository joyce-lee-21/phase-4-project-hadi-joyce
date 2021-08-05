// import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';


function SignUp( {classes, onLogin} ) {
    const history = useHistory();
    const [name, setName] = useState("")
    const [location, setLocation] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [profileType, setProfileType] = useState("")
    const [errors, setErrors] = useState([])
    const [alignment, setAlignment] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        async function signUp(){
            const res = await fetch("/users", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    name, 
                    location,
                    username,
                    password,
                    profile_type: profileType
                })
            })
            if(res.ok){
                const user = await res.json()
                onLogin(user)
                history.push('/account')
            } else {
                const err = await res.json()
                setErrors(err.errors)
            }
        };
        signUp()
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    
    return (
        <div>
            <div className="signup-render">
                <Container component="main" maxWidth="xs">
                    <h2 className="sign-up-header">Sign up for an account below</h2>
                    <h4>Select account type:</h4>
                    <ToggleButtonGroup value={alignment} onChange={(e)=>{handleAlignment(e)}}>
                        <ToggleButton
                            value="left"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e)=>{setProfileType('Worker')}}
                        >
                            Helper
                        </ToggleButton>
                        <ToggleButton 
                            value="right"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e)=>{setProfileType('Customer')}}
                        >
                            Customer
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <form className={classes.form} noValidate onSubmit={(e)=>handleSignUp(e)}>
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="name-required"
                        label="First and Last Name"
                        helperText="*Required"
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="location-required"
                        label="Location (Postal Code)"
                        helperText="*Required"
                        onChange={(e)=>{setLocation(parseInt(e.target.value))}}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        helperText="*Required"
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        helperText="*Required"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        {/* <Link to="/account" style={{color: 'inherit', textDecoration: 'none'}}> */}
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        {/* </Link> */}
                        {errors ? errors.map((error) => (
                            <p>{error}</p>
                        ))
                        : null}
                    </form>
                </Container>
            </div>       
        </div>
    )
}

export default SignUp;