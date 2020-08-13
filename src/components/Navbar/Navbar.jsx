import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
   
    render() {
        return (
            <nav>
            <ul>
            <li><h2>HOME</h2></li>
            <li><Link to="/users"><h2>USERS</h2></Link></li>
            <li><Link to="/gallery"><h2>GALLERY</h2></Link></li>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar