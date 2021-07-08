import {useState} from "react";
import React from 'react';
import {useStopwatch} from "react-timer-hook";
const Stopwatch = () => {
    const {
        seconds,
        minutes,
    } = useStopwatch({autoStart: true});

    return (

        <div className="Stopwatch">
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>

    );
}
export default Stopwatch;