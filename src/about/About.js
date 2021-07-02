import React, { useState } from 'react';

import Header from '../header/Header';
import MenuBurger from '../header/MenuBurger';
import Footer from '../footer/Footer';

import classNames from '../utils/ClassNames';
import SocialIcons from '../utils/Social-Icons';

function About(props) {
    const [ openFront, setOpenFront ] = useState(true);
    const [ openBack, setOpenBack ] = useState(false);
    const [ openAdd, setOpenAdd ] = useState(false);

    const openFrontToggle = () => {
        if (!openFront) {
            setOpenFront(true);
        } else {
            setOpenFront(false);
        }
    }
    const openBackToggle = () => {
        if (!openBack) {
            setOpenBack(true);
        } else {
            setOpenBack(false);
        }
    }

    const openAddToggle = () => {
        if (!openAdd) {
            setOpenAdd(true);
        } else {
            setOpenAdd(false);
        }
    }


    return (
        <section className="about">
            <Header />
            <div className="about_bio">
            <h2 className="about_bio-title"><b>About Me</b></h2>
            <p className="about_bio-item">Hello there! My name is Jesse Sandvik, and I am software engineer specializing in front end development.</p>
            </div>
            <div className="about_body">
                <div className="about_body-item">
            <h3 onClick={openFrontToggle}
                className={classNames({
                    "about_body-title": !openFront,
                    "about_body-title open": openFront,
                    })}
                    >Front End Skills{!openFront ? '+' : '-'}</h3>
                <ul className={classNames({
                    "about_body_list": !openFront,
                    "about_body_list open": openFront,
                    })}
                    >
                <li className="about_body_list-item">JavaScript ES6</li>
                    <li className="about_body_list-item">React</li>
                    <li className="about_body_list-item">React Hooks</li>
                    <li className="about_body_list-item">HTML5</li>
                    <li className="about_body_list-item">CSS3 / SASS / Bootstrap</li>
                    </ul>
                    </div>
                <div className="about_body-item">
            <h3 onClick={openBackToggle}
                className={classNames({
                    "about_body-title": !openBack,
                    "about_body-title open": openBack,
                    })}
                    >Back End Skills{!openBack ? '+' : '-'}</h3>
                <ul className={classNames({
                    "about_body_list": !openBack,
                    "about_body_list open": openBack,
                    })}>
                    <li className="about_body_list-item">Node.js</li>
                    <li className="about_body_list-item">PostGreSQL</li>
                    <li className="about_body_list-item">Express</li>
                    </ul>
                    </div>
                <div className="about_body-item">
            <h3 onClick={openAddToggle}
                className={classNames({
                    "about_body-title": !openAdd,
                    "about_body-title open": openAdd,
                    })}
                    >Additional Skills{!openAdd ? '+' : '-'}</h3>
                <ul className={classNames({
                    "about_body_list": !openAdd,
                    "about_body_list open": openAdd,
                    })}>
                    <li className="about_body_list-item">Mocha / Chai</li>
                    <li className="about_body_list-item">Git</li>
                    <li className="about_body_list-item">GitHub</li>
                    <li className="about_body_list-item">RESTful APIs</li>
                    <li className="about_body_list-item">NPM (Node Package Manager)</li>
                    </ul>
                    </div>
            </div>
            <div>
                <SocialIcons />
                <Footer />
                <MenuBurger menuIsOpen={props.menuIsOpen} menuToggle={props.menuToggleHandler}/>
                            </div>
                            </section>
    )
}

export default About;