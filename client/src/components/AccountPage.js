import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountPageCustomer from './AccountPageCustomer';
import AccountPageWorker from './AccountPageWorker';

function AccountPage({classes,userType,name,setName,username,setUsername,password,setPassword,budget,setBudget,user}) {
    const [view, setView] = useState("view")

    return (
        <div>
            <Grid container>
                <Grid item xs={3}/>
                    <Grid item xs={6}>
                    <Paper className={classes.account}>
                        {userType === "customer" 
                            ? <AccountPageCustomer 
                                classes={classes} 
                                view={view} 
                                setView={setView}  
                                name={name} 
                                username={username} 
                                password={password} 
                                budget={budget} 
                                user={user}
                            />
                            : <AccountPageWorker 
                                classes={classes} 
                                view={view} 
                                setView={setView}
                                name={name} 
                                username={username} 
                                password={password}
                                user={user}
                            />
                        }
                    </Paper>
                    </Grid>
            </Grid>
        </div>
    )
}

export default AccountPage;