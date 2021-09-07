import Card from "./Card";
import Progress from "./Progress";
import {createRef, useState} from "react";
import WinnerForm from "./WinnerForm";

let pairs = [];

function Game({users, setUsers, setGameState, cardArr}) {
    function clickEvent(card) {
        if (!card.found && !card.flipped && card !== prevCard) {

            clickCount();

            flipCard(card)
            if (prevCard) {
                if (prevCard.pairId === card.pairId) {
                    foundCards(prevCard, card)

                    pairs.push(prevCard, card)
                }
                setPrevCard(null)
            } else {
                setPrevCard(card)
            }

            if (pairs.length === 16) {
                refSec.current.timeSetter()
                setTimeout(setWon, 500,true)
                pairs = [];

            }

        }

    }

    function flipCard(card) {

        let tempArr = JSON.parse(JSON.stringify(cards));
        let flippedCards = tempArr.filter(el => el.flipped === true)
        if (flippedCards.length === 2) {
            flippedCards.map((card) => card.flipped = false)
        }

        let element = tempArr.find(el => el.id === card.id);
        element.flipped = !element.flipped;
        setCards(tempArr)

    }

    function foundCards(card1, card2) {
        let tempArr = JSON.parse(JSON.stringify(cards));
        let element1 = tempArr.find(el => el.id === card1.id);
        let element2 = tempArr.find(el => el.id === card2.id);

        element1.found = true;
        element2.found = true;
        element1.flipped= false;
        element2.flipped= false;
        setCards(tempArr)
    }

    function clickCount() {
        const count = clicks + 1;
        setClicks(count);

    }


    const [prevCard, setPrevCard] = useState(null);
    const [clicks, setClicks] = useState(0);
    const [won, setWon] = useState(false);
    const [time, setTime] = useState(0);
    const [cards, setCards] = useState(cardArr)
    const refSec = createRef();
    return (
        <>
            {won
                ?
                (
                    <WinnerForm time={time} setWon={setWon} clicks={clicks} users={users} setUsers={setUsers}
                                setGameState={setGameState}/>
                )
                :
                (
                    <>
                        <div className="Game">
                            {cards.map((card) => {
                                return (
                                    <>
                                        <Card id={card.id}
                                              key={card.id}
                                              value={card.pairId}
                                              src={card.src}
                                              classes={
                                                  card.found ? (" found ")
                                                      : card.flipped ? (" clicked ")
                                                      : ""
                                              }
                                              clickMethod={() => clickEvent(card)}

                                        />

                                    </>)
                            })}
                        </div>

                        <Progress refSec={refSec} setTime={setTime} won={won} clicks={clicks}/>
                    </>
                )
            }
        </>
    )
};


export default Game;
