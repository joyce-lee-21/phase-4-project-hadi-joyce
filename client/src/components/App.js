import '../assets/App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import React, { useState } from "react";
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import AccountPage from './AccountPage';
import Homepage from './Homepage';
import Dashboard from './Dashboard';


const theme = createTheme({
  palette: {
    primary: {
      main: '#8C9086',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  timeslot: {
    flexWrap: 'wrap',
    width: '20%',
  },
  homepage_top: {
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homepage_toplist: {
    width: '80%',
    background: '#AE887B',
    color: 'white',
    alignItems: 'flex-start'
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  homepage_bottom: {
    width: '80%',
    height: '400px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#E7E5D9',
  },
  account: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form_width: {
    width: '30%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  review_width:{
    width: '80%',
  },
  button: {
    padding: '5px',
  },
}));


function App() {
  const classes = useStyles();
  const [name, setName] = useState("")
  const [location, setLocation] = useState(0)
  const [budget, setBudget] = useState(0)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("customer"); //customer or helper
  const [userStatus, setUserStatus] = useState("login"); //username or empty strings

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
            <>
            <Header classes={classes} userType={userType} userStatus={userStatus}/>
            {userStatus === "" ? <h1>Welcome! Please Login or Sign Up</h1> : null}
            <Switch>
              <Route exact path="/login">
                <Login classes={classes} setUsername={setUsername} setPassword={setPassword}/>
              </Route>
              <Route exact path="/signup">
                <SignUp classes={classes} userType={userType} setUserType={setUserType} setUsername={setUsername} setPassword={setPassword} setName={setName} setLocation={setLocation}/>
              </Route>
              <Route exact path="/account">
                <AccountPage classes={classes} userType={userType} name={name} username={username} password={password}/>
              </Route>
              <Route exact path="/home">
                {userType === "customer" 
                  ? <Homepage classes={classes} userType={userType}/>
                  : <Dashboard classes={classes} userType={userType}/>
                }
              </Route>
            </Switch>
            </>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
