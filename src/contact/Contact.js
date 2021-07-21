import React from 'react';

import Header from '../header/Header';
import MenuBurger from '../header/MenuBurger';
import Footer from '../footer/Footer';

function Contact(props) {
    return (
        <section className="contact">
        <div className="contact_bio">
        <h2 className="contact_bio-title"><b>Contact Me</b></h2>
        <p className="contact_bio-item">Please feel free to reach out if you have any questions of inquiries. Thank you for stopping by!</p>
        </div>
        <div className="social-icons">
            <div className="social-icons_item">
            <a href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" className="link_style">
            <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <h3 className="social-icons_title">LinkedIn</h3>
            <p className="social-icons_desc">Come connect with me on LinkedIn! I love connecting with people, and watching us collectively grow and become the heroes of our own stories!</p>
            </div>
            <div className="social-icons_item">
            <a href="https://github.com/JesseSandvik" className="link_style">
            <i className="fab fa-github fa-2x"></i>
            </a>
            <h3 className="social-icons_title">GitHub</h3>
            <p className="social-icons_desc">Feel free to visit my GitHub repositories, I am always open to potential collaborations!</p>
            </div>
            <div className="social-icons_item">
            <a href="mailto: sandvikjesse@gmail.com" className="link_style">
            <i className="fas fa-at fa-2x"></i>
            </a>
            <h3 className="social-icons_title">Email</h3>
            <p className="social-icons_desc">Contact me via email with any questions, business inquiries, or even just to say hello!</p>
            </div>
        </div>
        <Footer />
        <Header />
        <MenuBurger menuIsOpen={props.menuIsOpen} menuToggle={props.menuToggleHandler}/>
        </section>
    )
}

export default Contact;