import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountPageCustomer from './AccountPageCustomer';
import AccountPageWorker from './AccountPageWorker';

function AccountPage({classes,userType,user,accountChanges}) {

    console.log(userType)

    return (
        <div>
            <Grid container>
                <Grid item xs={3}/>
                    <Grid item xs={6}>
                    <Paper className={classes.account}>
                        {userType === "Customer" 
                            ? (<AccountPageCustomer 
                                classes={classes} 
                                // view={view} 
                                // setView={setView}  
                                user={user}
                                accountChanges={accountChanges}
                            />)
                            : userType === "Worker"
                                ? (<AccountPageWorker 
                                    classes={classes} 
                                    // view={view} 
                                    // setView={setView}
                                    // name={name} 
                                    // location={location}
                                    // username={username} 
                                    // password={password}
                                    user={user}
                                    // setName={setName} 
                                    // setLocation={setLocation} 
                                    // setUsername={setUsername}
                                    // setPassword={setPassword}
                                    accountChanges={accountChanges}
                                />)
                                : null
                        }
                    </Paper>
                    </Grid>
            </Grid>
        </div>
    )
}

export default AccountPage;