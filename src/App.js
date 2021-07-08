import './App.css';
import {useState} from "react";
import Game from "./components/Game";
import StartButton from "./components/StartButton";
import Leaderboard from "./components/Leaderboard";

let iniUsers = [
    {name: "John", time: 1.1, id: 1, clicks: 65},
    {name: "John", time: 1.2, id: 1, clicks: 55},
    {name: "John", time: 0.4, id: 1, clicks: 54},
    {name: "John", time: 1.0, id: 1, clicks: 90}
]

function App() {
    const [gameState, setGameState] = useState(false);
    const [users, setUsers] = useState( iniUsers)
    function startGame() {

        setGameState(true)
        console.log(gameState)
    }

    return (
        <div className="App">

            {gameState
                ? (
                    <>
                        <Game/>

                    </>)
                : (
                    <>
                        <StartButton onClick={() => startGame()}/>
                        <Leaderboard users={users} />
                    </>)
            }
        </div>
    );
}

export default App;
