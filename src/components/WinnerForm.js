import React, {useRef} from "react";

const WinnerForm = ({setWon, clicks, users, setUsers, setGameState, time}) => {
    const inputRef = useRef();

    function handleSubmit() {
        let nameIn = inputRef.current;

        const temp= users ? (JSON.parse(JSON.stringify(users))) : [];
        let newUser = {
            name: nameIn.value,
            time: time,
            clicks: clicks}
        temp.push(newUser);
        setUsers(temp);
        setGameState(false);
        setWon(false)
    }

    return (
        <div className="WinnerForm">
            <input ref={inputRef} type="text" placeholder="Fill in your name"/>
            <button onClick={()=>handleSubmit()} >Submit score</button>
        </div>
    );
}


export default WinnerForm;
