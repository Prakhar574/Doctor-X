import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/file.png'; 

const Header = () => {
    return (
        <header>
            <div className="logo-title">
                <img src={logo} alt="Doctor X Logo" className="logo" />
                <div className="title">Doctor X</div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    
                    <li><NavLink to="/patients">Patients</NavLink></li>
                    <li><NavLink to="/doctors">Doctors</NavLink></li>
                    <li><NavLink to="/appointments">Appointments</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
