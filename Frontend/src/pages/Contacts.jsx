import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <main className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Email: info@doctorx.com</p>
                    <p>Phone: +123 456 7890</p>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27285.812513050216!2d75.66703467431643!3d31.25599200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1721332495253!5m2!1sen!2sin"
                            height="300"
                            width="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacts;
