import React, { useState } from 'react';

import Header from '../header/Header';
import MenuBurger from '../header/MenuBurger';
import Footer from '../footer/Footer';

import classNames from '../utils/ClassNames';
import SocialIcons from '../utils/Social-Icons';

function About(props) {
    const [ openBio, setOpenBio ] = useState(true);
    const [ openFront, setOpenFront ] = useState(false);
    const [ openBack, setOpenBack ] = useState(false);
    const [ openAdd, setOpenAdd ] = useState(false);

    const openBioToggle = () => {
        if (!openBio) {
            setOpenBio(true);
        } else {
            setOpenBio(false);
        }
    }

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
            <div className="about_bio">
            <h2 className="about_bio-title"><b>About Me</b></h2>
            <p className="about_bio-item">Hello! My name is Jesse, I am a front-end software engineer experienced in React, JavaScript, HTML, CSS, CSS-Bootstrap, & SASS.</p>
            </div>
            <div className="about_body">
                <div className="about_body-item">
            <h3 onClick={openBioToggle}
                className={classNames({
                    "about_body-title": !openBio,
                    "about_body-title open": openBio,
                    })}
                    >Bio{!openBio ? '+' : '-'}</h3>
                <ul className={classNames({
                    "about_body_list": !openBio,
                    "about_body_list open": openBio,
                    })}
                    >
                    <li className="about_body_list-item"><p>I am an extremely motivated, goal-oriented, and detail-oriented person, and I apply those same values to my code.</p></li>
                    <li className="about_body_list-item"><p>I love the active problem solving aspects and the freedom of expression that software development provides me.</p></li>
                    <li className="about_body_list-item"><p>I am a positive, optimistic person with big aspirations, but I also understand that there are bumps in every road.</p></li>
                    </ul>
                    </div>
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
                    <li className="about_body_list-item">Express</li>
                    <li className="about_body_list-item">REST APIs</li>
                    <li className="about_body_list-item">PostGreSQL</li>
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
                    <li className="about_body_list-item">NPM (Node Package Manager)</li>
                    </ul>
                    </div>
            </div>
            <div>
                <SocialIcons />
                <Footer />
                <Header />
                <MenuBurger menuIsOpen={props.menuIsOpen} menuToggle={props.menuToggleHandler}/>
                            </div>
                            </section>
    )
}

export default About;