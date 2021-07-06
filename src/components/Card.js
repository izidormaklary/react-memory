let cards = [];
let pairs = [];

function clickEvent(el) {
    if (!pairs.includes(el) && el !== cards[0]) {


        flipCard(el)
        cards.push(el)

        if (cards.length === 2) {
            let card1 = cards[0];
            let card2 = cards[1]
            if (card1.dataset.mark === card2.dataset.mark && card1 !== card2) {
                cards.forEach(el => setTimeout(foundCards, 1000, el))
                pairs.push(card1, card2)
            } else {

                cards.forEach(el => setTimeout(unFlipCard, 1000, el))

            }
            cards = []
        }
        if( pairs.length===16) {

    }}
}

function flipCard(el) {
    el.classList.add('clicked')
}

function unFlipCard(el) {

    el.classList.remove('clicked')
}
function foundCards(el){
    el.classList.remove('clicked')
    el.classList.add('found')
}
function youWon(){
    alert ("You won!")
}

const Card = ({src, id, value}) => {
    return (
        <div className="Card" id={id} data-mark={value} onClick={(e) => clickEvent(e.currentTarget)}>
            <img src={src} alt="memory card" className="images"/>
        </div>
    );
}


export default Card;
