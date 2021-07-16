import React, { useState } from 'react';

import Header from '../header/Header';
import MenuBurger from '../header/MenuBurger';
import Footer from '../footer/Footer';

import classNames from '../utils/ClassNames';
import pomodoroImage from "../images/pom-timer.png";
import SocialIcons from '../utils/Social-Icons';

function Projects(props) {
    const [ openPom, setOpenPom ] = useState(true);

    const openPomToggle = () => {
        if (!openPom) {
            setOpenPom(true);
        } else {
            setOpenPom(false);
        }
    }

    return (
        <section className="projects">
            <Header />
            <div className="projects_bio">
            <h2 className="projects_bio-title"><b>Projects</b></h2>
            <p className="projects_bio-item">Here are some of my recent projects. Stay tuned for updates!</p>
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
                    <div className="pom">
                <img src={pomodoroImage}
                     alt="pomodoro timer thumbnail"
                     className={classNames({
                    "pom_thumbnail": !openPom,
                    "pom_thumbnail open": openPom,
                    })}
                    />
                </div>
                <div className={classNames({
                    "pom_description": !openPom,
                    "pom_description open": openPom,
                })}
                >
                <a href="https://pomodoro-timer-project-three.vercel.app/">Pomodoro Timer 1.0</a>
                <a href="https://pomodoro-timer-project-three.vercel.app/"><i className="fas fa-link"></i></a>
                </div>
                </li>
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

export default Projects;