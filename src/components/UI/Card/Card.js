import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import classes from "./Card.module.css";

const Card = props => {
    let [state, setState] = useState({
        options : props.options,
        answer : props.answer,
        isOptionTrue : null
    });

    const logg = () => console.log(state);

    const checkAnswer = (event) => {
        props.attempt();
        if(event.target.innerHTML === state.answer) {
            setState( prevState => {
                return {
                    ...prevState,
                    isOptionTrue : true
                }
            });
            props.correctAnswerMarkUpdate();
        }
        
        setState(prevState => {
            return {
                ...prevState,
                isUpdatedOnce : true
            }
        })
    }

    const options = Object.keys(props.options).map((optionIndex, ind) => {
        return (
            <Button disabled={state.isUpdatedOnce} click={checkAnswer} key={ind} >{props.options[optionIndex]}</Button>
        )
    });

    return (
        <div className={classes.Card}>
            <h4>{props.question}</h4>
            <div className={classes.CardOption}>
                {options}
            </div>
        </div>
    )
}

export default Card;