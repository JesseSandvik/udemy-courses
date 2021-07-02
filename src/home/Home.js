import React from "react";

import MenuBurger from "../header/MenuBurger";
import DynamicHeaderMenu from "../header/DynamicHeaderMenu";
import DynamicBackground from "../panels/DynamicBackground";
import Footer from "../footer/Footer";
import Intro from "../intro/Intro";

function Home(props) {
    
    return (
        <section>
    <DynamicBackground menuToggle={props.menuToggleHandler}
                       openBackground={props.openBackground}
                       backgroundToggle={props.backgroundToggle}
                       />
                       <div className="home">
                       <Intro openBackground={props.openBackground} backgroundToggle={props.backgroundToggle} />
                     <DynamicHeaderMenu openBackground={props.openBackground} backgroundToggle={props.backgroundToggle} />
        <Footer />
        <MenuBurger menuIsOpen={props.menuIsOpen} menuToggle={props.menuToggleHandler} />
        </div>
    </section>
    );
}

export default Home;