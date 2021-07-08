import Card from "./Card";
import Progress from "./Progress";
import {useState} from "react";

let cardsRn = [];
let pairs = [];


let cardArr = []
for (let i = 0; i < 8; i++) {
    let element = {
        id: i,
        src: "./resources/" + i + ".png",
        pairId: i,
        flipped: false,
        found: false
    }
    let element2 = {
        id: i + 8,
        src: "./resources/" + i + ".png",
        pairId: i,
        flipped: false,
        found: false
    };
    cardArr.push(element);
    cardArr.push(element2);
}
cardArr = cardArr.sort(() => Math.random() - 0.5);


function Game() {
    function clickEvent(card) {
        if (!card.found && !card.flipped) {

            flipCard(card)
            cardsRn.push(card)

            if (cardsRn.length === 2) {
                let card1 = cardsRn[0];
                let card2 = cardsRn[1]
                if (card1.pairId === card2.pairId && card1 !== card2) {
                    setTimeout(foundCards,500,card1,card2)
                    pairs.push(card1, card2)
                } else {
                    cardsRn.forEach(card =>flipCard(card))
                }
                cardsRn = []
            }
            if (pairs.length === 16) {

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
        element1.flipped = false;
        element2.found = true;
        element2.flipped = false;
        setCards(tempArr)
    }

    function youWon() {
        alert("You won!")
    }

    const [cards, setCards] = useState(cardArr)
    return (
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
                                          :card.flipped ? (" clicked ")
                                          : ""
                                  }
                                  clickMethod={() => clickEvent(card)}

                            />

                        </>)
                })}
            </div>
            <Progress/>
        </>
    )
}


export default Game;
