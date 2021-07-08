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
        found:false
    }
    let element2={
        id: i+8,
        src: "./resources/" + i + ".png",
        pairId: i,
        flipped: false,
        found:false
    };
    cardArr.push(element);
    cardArr.push(element2);
}
cardArr = cardArr.sort(() => Math.random() - 0.5);


function Game() {
    function clickEvent( card) {
        if (!pairs.includes(card) && card !== cards[0]) {
            flipCard(card)
            cardsRn.push(card)

            if (cards.length === 2) {
                let card1 = cardsRn[0];
                let card2 = cardsRn[1]
                if (card1.pairId === card2.pairId && card1 !== card2) {
                    cards.forEach(el => setTimeout(foundCards, 1000, el))
                    pairs.push(card1, card2)
                } else {
                    cards.forEach(card => setTimeout(flipCard, 1000, card))
                }
                cardsRn = []
            }
            if (pairs.length === 16) {

            }
        }
    }

    function flipCard(card) {

        let tempArr = JSON.parse(JSON.stringify(cards));
        let flippedCards = tempArr.filter(el=> el.flipped === true)
        if ( flippedCards.length ===2){
            flippedCards.map((card)=> card.flipped = false)
        }

        let element = tempArr.find(el=> el.id === card.id);
        element.flipped = !element.flipped;
        setCards(tempArr)

    }

    function foundCards(el) {
        el.classList.remove('clicked')
        el.classList.add('found')
    }

    function youWon() {
        alert("You won!")
    }




    console.log(cardArr)
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
                                  classes={card.flipped ? (" clicked "):(" Card ")}
                                   clickMethod={() => clickEvent( card)}

                            />

                        </>)
                })}
            </div>
            <Progress/>
        </>
    )
}


export default Game;
