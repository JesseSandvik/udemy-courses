import React from "react";

import classNames from "../utils/ClassNames";
import Clock from "../utils/Clock";

function Intro(props) {
    return (
    <div onClick={props.backgroundToggle}
    className={classNames({
    "intro": !props.openBackground,
    "intro open": props.openBackground
})}>
    <h2 className="intro_clock open"><Clock /></h2>
    <div><p className="open">My name is</p> <h2 className="intro_name open">Jesse <strong>Sandvik</strong>.</h2></div>
    <h2 className="intro_title open">Software Engineer, Web Developer, & Programmer</h2>
</div>
    );
}

export default Intro;