import React, { useState } from 'react';
import cardiacImg from '../assets/service/cardiac.png';
import cancerImg from '../assets/service/cancer.png';
import neuroImg from '../assets/service/neuro.png';
import gastroImg from '../assets/service/gastro.png';
import orthoImg from '../assets/service/ortho.png';
import member1Img from '../assets/dr2.jpg';
import member2Img from '../assets/dr1.jpg';
import member3Img from '../assets/dr3.jpg';
import post1Img from '../assets/service/post1.jpg';
import post2Img from '../assets/service/post2.jpeg';
import post3Img from '../assets/service/post3.jpeg';
import './services.css';

const ServicesPage = () => {
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            name: 'Cardiac Sciences',
            description: 'Comprehensive cardiac care and surgery.',
            img: cardiacImg
        },
        {
            name: 'Cancer Care',
            description: 'We lead in oncology services, blending expertise, compassion, and a legacy of healthcare excellence.',
            img: cancerImg
        },
        {
            name: 'Neuro Sciences',
            description: 'Advanced care for neurological disorders.',
            img: neuroImg
        },
        {
            name: 'Gastro Sciences',
            description: 'Expert care for digestive health.',
            img: gastroImg
        },
        {
            name: 'Orthopaedics',
            description: 'Innovative solutions for musculoskeletal issues.',
            img: orthoImg
        },
    ];

    return (
        <div>
            <section className="services">
                <h2 className="h3">Our Services</h2>
                <div className="service-cards">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card ${hoveredService === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <img src={service.img} alt={service.name} className="service-img" />
                            <h3>{service.name}</h3>
                            {hoveredService === index && (
                                <div className="card-hover">
                                    <p>{service.description}</p>
                                    <a href="/services" className="service-button">Read More</a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section className="testimonials">
                <h2 className="h3">What Our Patients Say</h2>
                <div className="testimonials-cards">
                    <div className="testimonial">
                        <p>"The best cardiac care I have ever received! Highly recommend."</p>
                        <span>- Prakhar Katiyar</span>
                    </div>
                    <div className="testimonial">
                        <p>"Amazing staff and state-of-the-art facilities for cancer treatment."</p>
                        <span>- Puneet Katiyar</span>
                    </div>
                    <div className="testimonial">
                        <p>"Exceptional neurological care and attention to detail."</p>
                        <span>- Prajwal Gautam</span>
                    </div>
                </div>
            </section>
            <section className="cta-banner">
                <h2 className="h3">Join Us for a Healthier Tomorrow</h2>
                <p>Contact us today to schedule an appointment or to learn more about our services.</p>
                <a href="/contact" className="cta-button">Contact Us</a>
            </section>
            <section className="statistics">
                <h2 className="h3">Our Achievements</h2>
                <div className="stats-cards">
                    <div className="stat-card">
                        <h3>500+</h3>
                        <p>Surgeries Performed</p>
                    </div>
                    <div className="stat-card">
                        <h3>1,000+</h3>
                        <p>Satisfied Patients</p>
                    </div>
                    <div className="stat-card">
                        <h3>150+</h3>
                        <p>Awards Won</p>
                    </div>
                </div>
            </section>
            <section className="team">
                <h2 className="h2" >Meet Our Team</h2>
                <div className="team-cards">
                    <div className="team-member">
                        <img src={member1Img} alt="Dr. Alice Johnson" />
                        <h3>Dr. Puneet Katiyar</h3>
                        <p>Cardiologist</p>
                    </div>
                    <div className="team-member">
                        <img src={member2Img} alt="Dr. Bob Smith" />
                        <h3>Dr. Prakhar Katiyar</h3>
                        <p>Oncologist</p>
                    </div>
                    <div className="team-member">
                        <img src={member3Img} alt="Dr. Carol White" />
                        <h3>Dr. Prajwal Gautam</h3>
                        <p>Neurologist</p>
                    </div>
                </div>
            </section>
            <section className="blog">
                <h2 className="h3">Latest Blog Posts</h2>
                <div className="blog-cards">
                    <div className="blog-post">
                        <img src={post1Img} alt="How to Maintain a Healthy Heart" />
                        <h3>How to Maintain a Healthy Heart</h3>
                        <p>Read our tips on keeping your heart in top condition...</p>
                        <a href="#" className="blog-button">Read More</a>
                    </div>
                    <div className="blog-post">
                        <img src={post2Img} alt="Advancements in Cancer Treatment" />
                        <h3>Advancements in Cancer Treatment</h3>
                        <p>Discover the latest advancements in cancer treatment...</p>
                        <a href="#" className="blog-button">Read More</a>
                    </div>
                    <div className="blog-post">
                        <img src={post3Img} alt="Managing Neurological Disorders" />
                        <h3>Managing Neurological Disorders</h3>
                        <p>Learn about managing various neurological disorders...</p>
                        <a href="#" className="blog-button">Read More</a>
                    </div>
                </div>
            </section>
            <section className="faq">
                <h2 className="h2">Frequently Asked Questions</h2>
                <div className="faq-cards">
                    <div className="faq-item">
                        <h3>What services do you offer?</h3>
                        <p>We offer a wide range of services including cardiac care, cancer treatment, neurological care, and more.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How can I book an appointment?</h3>
                        <p>You can book an appointment by contacting us through our website or by calling our office.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What insurance plans do you accept?</h3>
                        <p>We accept a variety of insurance plans. Please contact us for more details.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
