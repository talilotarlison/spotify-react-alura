import "./Card.css"

function Card(props) {
    return (
        <a href="#" className="playlist-link" >
            <div id="playlist" className={props.numberCard} >
                <h3>{props.name}</h3>
                <img className="cover" src={props.urlImg} alt={props.imgDiscricao} />
            </div>
        </a>
    )
}

export default Card
