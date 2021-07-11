
import React, {useImperativeHandle} from "react";
import {useStopwatch} from "react-timer-hook";
const Stopwatch = React.forwardRef(({setTime, won},ref)=> {
    const {
        seconds,
        minutes,
    } = useStopwatch({autoStart: true});

    useImperativeHandle(ref,()=> ({
        timeSetter()
        {
            setTime({minutes:minutes, seconds: seconds})
        }
    }))

    return (

        <div  className="Stopwatch">
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>

    );
})
export default Stopwatch;