import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function Login({classes, username, password, setUsername, setPassword, onLogin}) {
    const history = useHistory();
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        async function login(){
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    username, 
                    password 
                    }),
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
        login()
    }
    
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <h2>Login to your account</h2>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                    {/* <Link to="/account" style={{color: 'inherit', textDecoration: 'none'}}> */}
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                    {/* </Link> */}
                    {errors.map((error) => (
                        <p>{error}</p>
                    ))}
                </form>
            </Container>
        </div>
    )
}

export default Login;