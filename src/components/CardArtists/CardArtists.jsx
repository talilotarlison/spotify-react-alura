import "./CardArtists.css"

function CardArtists(props) {
  return (
    <div className="artist__card">
      <a href="#" className="card_artist">
        <img src={props.urlImg}/>
          <p className="artist__name">{props.name}</p>
          <p className="artist__genre">{props.genre}</p>
          <span className="fa-solid fa-circle-play"></span>
      </a>
    </div>
  )
}

export default CardArtists
