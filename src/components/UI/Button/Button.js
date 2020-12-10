import React from "react";
import classes from "./Button.module.css";

const Button = props => {
    const classList = [classes.Button];
    if(props.children === 'Start Quiz') {
        classList.push(classes.StartQuiz);
    }
    if(props.children === 'Show Results') {
        classList.push(classes.ShowResult);
    }

    return (
        <button className={classList.join(' ')} disabled={props.disabled} onClick={props.click}>{props.children}</button>
    )
} 
        

export default Button;