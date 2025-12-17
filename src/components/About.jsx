import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section-padding about-section" id="about">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious Burger" className="about-image" />
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Us</h2>
                    <p className="about-text">
                        12:11 Restaurant is a welcoming dining destination in New GRA, Port Harcourt, known for tasty meals served in a calm and comfortable setting. We focus on quality, consistency, and great customer experience, offering a menu that caters to both local favorites and popular international dishes.</p>
                    <a href="#more" className="button-primary">Read Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default About;
