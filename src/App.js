import './App.css';


import {useState, useEffect} from "react";
import Game from "./components/Game";
import StartButton from "./components/StartButton";
import Leaderboard from "./components/Leaderboard";
import {nanoid} from 'nanoid';

const iniUsers = [];
let cardArr = []
for (let i = 0; i < 8; i++) {
    let element = {
        id: nanoid(2),
        src: "./resources/" + i + ".png",
        pairId: i,
        flipped: false,
        found: false
    }
    let element2 = {
        id: nanoid(2),
        src: "./resources/" + i + ".png",
        pairId: i,
        flipped: false,
        found: false
    };
    cardArr.push(element, element2);

}
cardArr = cardArr.sort(() => Math.random() - 0.5);


const MEMORYKEY = "memoryKey!"

function App() {
    const [gameState, setGameState] = useState(false);
    const [users, setUsers] = useState(iniUsers);

    function startGame() {

        setGameState(true)

    }

    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem(MEMORYKEY + ".users")))
    }, []);

    useEffect(() => {
        window.localStorage.setItem(MEMORYKEY + ".users", JSON.stringify(users));
    }, [users]);

    return (
        <div className="App">

            {gameState
                ?
                (
                    <>
                        <Game users={users} cardArr={cardArr} setGameState={setGameState} setUsers={setUsers}/>

                    </>
                )
                :
                (
                    <>
                        <StartButton onClick={() => startGame()}/>
                        <Leaderboard users={users}/>
                    </>
                )
            }
        </div>
    );
};

export default App;
