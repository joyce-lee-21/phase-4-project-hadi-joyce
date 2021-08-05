import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Header({userType, user, onLogout}) {

    return (
        <div className="header">
            <div className="nav-left">
                <NavLink exact to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    <h2 className="logo">Housework Helper</h2>
                </NavLink>
            </div>
            {user
                ? <>
                    <h4>{`Welcome, ${user.profile.name}!`}</h4>
                    <div className="nav-right">
                        <NavLink to="/account" className="nav-link" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary">Account</Button>
                        </NavLink>
                        <NavLink to="/home" className="nav-link" style={{ textDecoration: 'none' }}>
                        {userType === "Customer"
                            ? <Button variant="contained" color="primary">Homepage</Button>
                            : <Button variant="contained" color="primary">Dashboard</Button>
                        }
                        </NavLink>
                        <NavLink to="/logout" className="nav-link" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>
                        </NavLink>
                    </div>
                </>
                : <div className="nav-right">
                    <NavLink to="/login" className="nav-link" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">Login</Button>
                    </NavLink>
                    <NavLink to="/signup" className="nav-link" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">Sign Up</Button>
                    </NavLink>
                </div>
            }
            
        </div>
    )
}

export default Header;
    