import React from "react";
import classes from "./Banner.module.css"
const Banner = props => {

    return (
        <h2 className={classes.Banner} >{props.children}</h2>
    )
}

export default Banner;