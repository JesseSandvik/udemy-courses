import React from "react";

import classNames from "../utils/ClassNames";
import SocialIcons from "../utils/Social-Icons";

function DynamicBackground(props) {

    const backgroundClickHandler = () => {
        props.backgroundToggle()
    };

    return (
        <div className={classNames({
            "dyn_background": props.openBackground,
            "dyn_background open": !props.openBackground
        })}>
        <div className={classNames({
            "panels": !props.openBackground,
            "panels open": props.openBackground,
        })}>
            <div className={classNames({
                 "panel panel1": !props.openBackground,
                 "panel panel1 open": props.openBackground,
                })}>
            </div>
            <div onClick={backgroundClickHandler}
                 className={classNames({
                 "panel panel2": !props.openBackground,
                 "panel panel2 open": props.openBackground,
                })}>
                    <h2 onClick={backgroundClickHandler}
                        className={classNames({
                        "welcome": !props.openBackground,
                        "welcome open": props.openBackground
                    })}>
                        Welcome.
                    </h2>
            </div>
            <div className={classNames({
                 "panel panel3": !props.openBackground,
                 "panel panel3 open": props.openBackground,
                 })}>
            </div>
            <div className={classNames({
                 "panel panel4": !props.openBackground,
                 "panel panel4 open": props.openBackground,
                 })}>
                     <SocialIcons />
            </div>
          </div>
          </div>
            )
    }
    
    //menuToggle={props.menuToggleHandler}

    export default DynamicBackground;