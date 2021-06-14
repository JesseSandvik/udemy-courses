import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <main>
        <section className="contact">
            <h2 className="contact_title"><b>CONTACT ME</b></h2>
            <div className="contact_body">
            <p className="contact_body-item">Please feel free to contact me with any questions or inquiries.</p>
            <p className="contact_body-item">Thanks for stopping by!</p>
            <div className="contact_box">
            <div className="contact_box_item">
            <h3 className="contact_box_item_text">Linked<i className="fab fa-linkedin-in fa-2x"></i></h3>
            <a href="https://www.linkedin.com/in/jesse-sandvik-3b91b620a/" className="contact_box_item_link">linkedin.com/in/jesse-sandvik/</a>
            </div>
            <br />
            <div className="contact_box_item">
            <h3 className="contact_box_item_text">GitHub<i className="fab fa-github fa-2x"></i></h3>
            <a href="https://github.com/JesseSandvik" className="contact_box_item_link">github.com/JesseSandvik</a>
            </div>
            <br />
            <div className="contact_box_item">
            <h3 className="contact_box_item_text">eMail<i className="fas fa-at fa-2x"></i></h3>
            <a href="mailto: sandvikjesse@gmail.com" className="contact_box_item_link">sandvikjesse@gmail.com</a>
            </div>
            </div>
            </div>
        </section>
        </main>
    )
}

export default Contact;