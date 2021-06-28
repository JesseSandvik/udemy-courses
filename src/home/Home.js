import React from "react";

import DynamicBackground from "../panels/DynamicBackground";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home({ backgroundOpen, backgroundToggle }) {
    
    return (
        <>
    <DynamicBackground backgroundOpen={backgroundOpen} backgroundToggle={backgroundToggle} />
    <section className="home">
        {backgroundOpen &&(
        <Header />
        )}
        <Footer />
    </section>
    </>
    );
}

export default Home;