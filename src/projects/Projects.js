import React, { useState } from 'react';

import Header from '../header/Header';
import MenuBurger from '../header/MenuBurger';
import Footer from '../footer/Footer';

import classNames from '../utils/ClassNames';
import pomodoroImage from "../images/pomodoro-thumbnail.png";
import cipherImage from "../images/cipher-thumbnail.png";
import SocialIcons from '../utils/Social-Icons';

function Projects(props) {
    const [ openPom, setOpenPom ] = useState(true);
    const [ openCipher, setOpenCipher ] = useState(false);

    const openPomToggle = () => {
        if (!openPom) {
            setOpenPom(true);
        } else {
            setOpenPom(false);
        }
    }

    const openCipherToggle = () => {
        if (!openCipher) {
            setOpenCipher(true);
        } else {
            setOpenCipher(false);
        }
    }

    return (
        <section className="projects">
            <div className="projects_bio">
            <h2 className="projects_bio-title"><b>Projects</b></h2>
            <p className="projects_bio-item">Here is a collection of my recent projects. Included is a brief description of the application, a link to the deployed application (if applicable), and a link to the repository for the project.</p>
            </div>
            <div className="projects_body">
                <div className="projects_body-item">
            <h3 onClick={openPomToggle}
                className={classNames({
                    "projects_body-title": !openPom,
                    "projects_body-title open": openPom,
                    })}
                    >Pomodoro Timer{!openPom ? '+' : '-'}</h3>
                <ul className={classNames({
                    "projects_body_list": !openPom,
                    "projects_body_list open": openPom,
                    })}
                    >
                <li className="projects_body_list-item">
                    <div className="project">
                        <p>The pomodoro timer is designed around the work/break interval system of the pomodoro technique.</p>
                        <p>This application was built using JavaScript, HTML, CSS, Bootstrap, & React.</p>
                        <p>It was tested locally using Node.js.</p>
                            <img src={pomodoroImage}
                                 alt="pomodoro timer thumbnail"
                                 className={classNames({
                                 "project_thumbnail": !openPom,
                                 "project_thumbnail open": openPom,
                                 })}
                                 />
                    </div>
                <div className={classNames({
                    "project_description": !openPom,
                    "project_description open": openPom,
                })}
                >
                <a href="https://pomodoro-timer-project-three.vercel.app/" className="project-link"><i className="fas fa-link"></i></a>
                <a href="https://github.com/JesseSandvik/Pomodoro-Timer-Project" className="project-link"><i className="fab fa-github fa"></i></a>
                </div>
                </li>
                </ul>
                    </div>
                <div className="projects_body-item">
            <h3 onClick={openCipherToggle}
                className={classNames({
                    "projects_body-title": !openCipher,
                    "projects_body-title open": openCipher,
                    })}
                    >Decoder Ring{!openCipher ? '+' : '-'}</h3>
                <ul className={classNames({
                    "projects_body_list": !openCipher,
                    "projects_body_list open": openCipher,
                    })}
                    >
                <li className="projects_body_list-item">
                    <div className="project">
                        <p>In cryptography, a cipher (or cypher) is an algorithm for performing encryption or decryption.</p>
                        <p>The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance.</p>
                        <p>The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid.</p>
                        <p>The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet.</p>
                        <p>This application was built using JavaScript, HTML, CSS, & Bootstrap.</p>
                        <p>It was tested locally using Mocha.</p>
                            <img src={cipherImage}
                                 alt="cipher thumbnail"
                                 className={classNames({
                                 "project_thumbnail": !openCipher,
                                 "project_thumbnail open": openCipher,
                                 })}
                                 />
                    </div>
                <div className={classNames({
                    "project_description": !openCipher,
                    "project_description open": openCipher,
                })}
                >
                <a href="https://project-decoder-ring-1-woad.vercel.app/" className="project-link"><i className="fas fa-link"></i></a>
                <a href="https://github.com/JesseSandvik/Project-Decoder-Ring-1" className="project-link"><i className="fab fa-github fa"></i></a>
                </div>
                </li>
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

export default Projects;