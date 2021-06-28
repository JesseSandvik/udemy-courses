import React from "react";

import classNames from "../utils/ClassNames";
import SocialIcons from "../utils/Social-Icons";

function DynamicBackground(props) {

    return (
        <div className={classNames({
            "dyn_background": props.backgroundOpen,
            "dyn_background open": !props.backgroundOpen
        })}>
        <div className={classNames({
            "panels": !props.backgroundOpen,
            "panels open": props.backgroundOpen,
        })}>
            <div className={classNames({
                 "panel panel1": !props.backgroundOpen,
                 "panel panel1 open": props.backgroundOpen,
                })}>
            </div>
            <div onClick={props.backgroundToggle}
                 className={classNames({
                 "panel panel2": !props.backgroundOpen,
                 "panel panel2 open": props.backgroundOpen,
                })}>
                    <h2 onClick={props.backgroundToggle}
                        className={classNames({
                        "welcome": !props.backgroundOpen,
                        "welcome open": props.backgroundOpen
                    })}>
                        Welcome.
                    </h2>
            </div>
            <div className={classNames({
                 "panel panel3": !props.backgroundOpen,
                 "panel panel3 open": props.backgroundOpen,
                 })}>
            </div>
            <div className={classNames({
                 "panel panel4": !props.backgroundOpen,
                 "panel panel4 open": props.backgroundOpen,
                 })}>
                     <SocialIcons />
            </div>
          </div>
          </div>
            )
    }
    
    export default DynamicBackground;