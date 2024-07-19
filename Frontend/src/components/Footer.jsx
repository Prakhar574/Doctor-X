import React from 'react';
import logo from '../assets/file.png'; 
import appStoreImg from '../assets/app.png';
import playStoreImg from '../assets/play.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section logo-section">
                    <img src={logo} alt="Doctor X Logo" className="footer-logo" />
                    <p>&copy; 2024 DoctorX Project. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@doctorx.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Medical Way, Health City</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/patients">Patients</a></li>
                        <li><a href="/doctors">Doctors</a></li>
                        <li><a href="/appointments">Appointments</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                        <li><a href="/About">About Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
