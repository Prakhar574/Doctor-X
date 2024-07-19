import React from 'react';
import './about.css'; 
import hospitalPic from '../assets/background.jpg';
import creatorPic from '../assets/about.jpg';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <div className="about-header">
                <div className="about-header-content">
                    <span className="hashtag">#HospitalCare</span>
                    <h1 className="slogan">Your Health, Our Priority</h1>
                </div>
            </div>
            <div className="about-details">
                <div className="about-image">
                    <img src={hospitalPic} alt="Hospital" />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>We are committed to providing the best healthcare services with a focus on patient care and well-being. Our team of professionals works tirelessly to ensure that every patient receives the highest standard of treatment.</p>
                </div>
            </div>
            <div className="creator-info">
                <div className="creator-image">
                    <img src={creatorPic} alt="Creator" />
                </div>
                <div className="creator-details">
                    <h3>Website Creator</h3>
                    <p>Prakhar Katiyar is a passionate Full stack developer with an interest in creating functional and aesthetically pleasing websites. Feel free to connect via:</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/prakharktr/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Prakhar574" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="mailto:pkatiyar574@gmail.com" className="social-icon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
