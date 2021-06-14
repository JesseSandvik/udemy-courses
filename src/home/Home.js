import React from 'react';
import Clock from '../utlis/Clock';
import SocialIcons from "../utlis/Social-Icons";

function Home() {
    return (
        <main>
            <section className="home">
                <span className="home_clock"><h2><Clock /></h2></span>
                <br/>
                <h2>My Name Is</h2>
                <h1 className="home_name">
                    <strong>Jesse <span className="home_name--last">Sandvik</span></strong>
                </h1>
                <h2 className="home_job-title"><strong>Software Developer, Web Designer & Programmer</strong></h2>
                {SocialIcons()}
            </section>
        </main>
    );
}

export default Home;