// import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useState } from 'react';


function SignUp( {classes, userType, setUserType, setName, setLocation, setUsername, setPassword} ) {


    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(name)
    }
    
    return (
        <div>
            <div className="sign-up-type">
                <h2 className="sign-up-header">Sign up for an account below</h2>
                <h4>Select account type:</h4>
                <Button 
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e)=>setUserType('helper')}
                >
                    Helper
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e)=>setUserType('customer')}
                >
                    Customer
                </Button>
            </div>
            <div className="signup-render">
                <Container component="main" maxWidth="xs">
                    <form className={classes.form} noValidate onSubmit={(e)=>handleSignUp(e)}>
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="name-required"
                        label="First and Last Name"
                        helperText="*Required"
                        onChange={(e)=>{setName(e.target.value)}}
                        // value={enterLoginUsername}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="location-required"
                        label="Location (Postal Code)"
                        helperText="*Required"
                        onChange={(e)=>{setLocation(e.target.value)}}
                        // value={enterLoginUsername}
                        />
                        <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        helperText="*Required"
                        onChange={(e)=>{setUsername(e.target.value)}}
                        // value={enterLoginUsername}
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
                        // value={enterLoginPD}
                        />
                        <Link to="/account" style={{color: 'inherit', textDecoration: 'none'}}>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </form>
                </Container>
            </div>       
        </div>
    )
}

export default SignUp;