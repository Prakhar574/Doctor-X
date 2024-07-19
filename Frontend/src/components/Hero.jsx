import React from 'react';
import homeImage from '../assets/home.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h2>Welcome to Our Hospital</h2>
                    <p>Your health is our priority. We offer comprehensive healthcare services for everyone.</p>
                    <a href="/services" className="cta-button">Learn More</a>
                </div>
                <div className="hero-image">
                    <img src={homeImage} alt="Hospital" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
