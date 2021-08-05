import '../assets/App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import React, { useEffect, useState } from "react";
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
  // const [name, setName] = useState("")
  // const [location, setLocation] = useState(0)
  // const [budget, setBudget] = useState(0)
  // const [services, setServices] = useState("")
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  const [user, setUser] = useState(null); //updated upon login/signup
  const [userType, setUserType] = useState(""); //Customer or Worker -- updated upon login/signup
  // const [login, setLogin] = useState("login"); //login or signup -- updated upon login/signup

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          // console.log('App useEffect fetch:', user, userType)
          setUser(user)
          setUserType(user.profile_type)
        });
      }
    })
  }, []);

  const onLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    });
  }

  const onLogin = (user) => {
    setUser(user)
    setUserType(user.profile_type)
  }

  const onAccountChanges = () => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
          setUserType(user.profile_type)
        });
      }
    })
  }

  // console.log('App:', user, userType)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
            <>
            <Header classes={classes} userType={userType} onLogout={onLogout} user={user}/>
            {/* {!user
              ? login === "login"
                ?
                (<Login 
                  classes={classes} 
                  username={username} 
                  password={password} 
                  setUsername={setUsername} 
                  setPassword={setPassword} 
                  onLogin={setUser}
                  />)
                :
                (<SignUp 
                  classes={classes} 
                  userType={userType} 
                  setUserType={setUserType} 
                  setUsername={setUsername} 
                  setPassword={setPassword} 
                  setName={setName} 
                  setLocation={setLocation}
                />)
              : null} */}
            <Switch>
              <Route exact path="/login">
                <Login 
                  classes={classes} 
                  onLogin={onLogin}
                />
              </Route>
              <Route exact path="/signup">
                <SignUp 
                  classes={classes}
                  onLogin={onLogin}
                />
              </Route>
              <Route exact path="/account">
                <AccountPage 
                  classes={classes} 
                  userType={userType} 
                  user={user}
                  accountChanges={onAccountChanges}
                />
              </Route>
              <Route exact path="/home">
                {userType === "Customer" 
                  ? <Homepage classes={classes} user={user}/>
                  : <Dashboard classes={classes} user={user}/>
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
