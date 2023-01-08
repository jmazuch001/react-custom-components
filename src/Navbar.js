import React from 'react'
import BadgeDesigner from './BadgeDesigner';
// import Button from 'react-bootstrap/Button'
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="links">
                <Button variant="outlined" color="primary" className="nav-buttons">
                <Link to="/">Home</Link>
                </Button>
                <Button variant="outlined" color="primary" className="nav-buttons">
                <Link to="/badgedesigner">Badge Designer</Link>
                </Button>
                <Button variant="outlined" color="primary" className="nav-buttons">
                <Link to="/dashboard">Dashboard</Link>
                </Button>
            </div>
        </nav>
    );
}


  

export default Navbar;