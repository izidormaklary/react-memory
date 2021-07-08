





const Card = ({src, id, clickMethod, classes}) =>
    (
        <div className={"Card"+classes} key={id}   onClick={clickMethod}>
            <img src={src} alt="memory card" className="images"/>
        </div>
    );



export default Card;
