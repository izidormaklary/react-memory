import {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const list = document.querySelectorAll('Card')

    function increase(){
        console.log(count)
        let temp = count+1;
        setCount(temp)
    }
    return (
        <div className="Counter">
            {count}
        </div>
    );
}


export default Counter;

