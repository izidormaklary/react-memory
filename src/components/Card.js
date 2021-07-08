





const Card = ({src, id, value, clickMethod, classes}) => {
    return (
        <div className={"Card"+classes} id={id} data-mark={value} onClick={clickMethod}>
            <img src={src} alt="memory card" className="images"/>
        </div>
    );
}


export default Card;
