// import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React, { useState } from "react";

function Login({classes, setUsername, setPassword}) {
    
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <h2>Login to your account</h2>
                <form className={classes.form} noValidate>
                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <Link to="/account" style={{color: 'inherit', textDecoration: 'none'}}>
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                    </Link>
                </form>
            </Container>
        </div>
    )
}

export default Login;