import Counter from "./Counter";
import Stopwatch from "./Stopwatch";

const Progress = ({clicks, won, setTime, refSec}) => {


    return (
        <div className="Progress">
            <Stopwatch ref={refSec} won={won} setTime={setTime}/>
            <Counter clicks={clicks}/>
        </div>
    );
}


export default Progress;
