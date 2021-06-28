import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import SocialIcons from '../utils/Social-Icons';

function Contact() {
    return (
        <section className="contact">
        <Header />
        <div className="contact_bio">
        <h2 className="contact_bio-title"><b>Contact Me</b></h2>
        <p className="contact_bio-item">Please feel free to reach out if you have any questions of inquiries. Thank you for stopping by!</p>
        </div>
        <div className="contact_body">
        <div className="social-icons">
            <div className="social-icons_item">
            <a href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" className="link_style">
            <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <h3>LinkedIn</h3>
            <p>Contact me via email with any questions, business inquiries, potential opportunities, or even just to say hi!</p>
            </div>
            <div className="social-icons_item">
            <a href="https://github.com/JesseSandvik" className="link_style">
            <i className="fab fa-github fa-2x"></i>
            </a>
            <h3>GitHub</h3>
            <p>Contact me via email with any questions, business inquiries, potential opportunities, or even just to say hi!</p>
            </div>
            <div className="social-icons_item">
            <a href="mailto: sandvikjesse@gmail.com" className="link_style">
            <i className="fas fa-at fa-2x"></i>
            </a>
            <h3>Email</h3>
            <p>Contact me via email with any questions, business inquiries, potential opportunities, or even just to say hi!</p>
            </div>
        </div>
        </div>
        <Footer />
        </section>
    )
}

export default Contact;