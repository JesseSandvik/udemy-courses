import './About.scss';
import React from 'react';
import CreateList from '../utlis/CreateList';
import SocialIcons from '../utlis/Social-Icons';

function About() {

    const aboutArr = [
        <p className="about_body-item">Hello! My name is Jesse, I am a front-end software engineer experienced in JavaScript, HTML, CSS, CSS-Bootstrap, SASS, and React.js. I am an extremely motivated, goal-oriented, and detail-oriented person, and I apply those same values to my code. I love the active problem solving aspects and the freedom of expression that software development provides me.</p>,
        <p className="about_body-item">I spent my youth dedicated to music and art. I've played bass guitar since I was 10, I've been in numerous bands, and I've taken every art class grade school had to offer, including extracurriculars. I was part of a small team that painted the English hallway mural senior year of high school. I was even fortunate enough to be asked to paint my own piece above my high school locker. I've always had a passion for creating.</p>,
        <p className="about_body-item">I was that annoying child that would take everything apart. Some things did not always go back together, and some that did no longer functioned properly. Nevertheless, my curiosity and desire to understand how different things worked is what drove me to software engineering.</p>,
        <p className="about_body-item">My decision to attend Thinkful and learn the fundamentals of software engineering has proven to be the single greatest gift I have given myself thus far. Software development has allowed me to combine my two great passions and share them with the world, one line of code at a time.</p>
    ]
    return (
        <main>
        <section className="about">
            <div className="about_header">
            <h2 className="about_title"><b>ABOUT ME</b></h2>
            </div>
            <div className="about_body">
                            <CreateList items={aboutArr} />
                            {SocialIcons()}
                            </div>
                            </section>
                            </main>
    )
}

export default About;