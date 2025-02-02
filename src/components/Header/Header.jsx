import { useState, useEffect } from 'react';
import "./Header.css"
import smallRight from "../../assets/img/icons/small-right.png"
import smallLeft from "../../assets/img/icons/small-left.png"
import Search from "../../assets/img/icons/search.png"
import CardArtists from "../CardArtists/CardArtists"

function Header() {
  const [artistas, setArtitas] = useState([]);
  const [modal, setModal] = useState("all-artists-hidden");

  async function carregarArtistas(busca) {
    let newBusca = busca == "" ? null : busca;
    try {
      const resposta = await fetch(`http://localhost:3000/artists?name=${newBusca}`);
      const artistas = await resposta.json();
      console.log(artistas)
      if (artistas.length == 0) {
        setModal("all-artists-hidden")
      } else {
        setModal("all-artists");
        setArtitas(artistas)
      }

    } catch (erro) {
      console.error("Erro ao carregar artistas:", erro);
    }
  }

  useEffect(() => {
    setModal("all-artists");
    carregarArtistas(null);
  }, []); // A dependência vazia [] garante que o useEffect só seja chamado uma vez ao montar o componente

  return (
    <>
      <header>
        <div>
          <div className="section__search">
            <button className="arrow_icon">
              <img src={smallLeft} alt="Seta direita" />
            </button>
            <button className="arrow_icon">
              <img src={smallRight} alt="Seta esquerda" />
            </button>
            <div className="section__search__input">
              <img src={Search} />
              <input
                onChange={(e) => carregarArtistas(e.target.value)}
                type="text"
                placeholder="O que você quer ouvir?"
              />
            </div>
          </div>
        </div>
        <div className="login">
          <a href="#"> Inscreva-se</a>
          <button className="bnt_login">Entrar</button>
        </div>
      </header>
      <dialog id={modal}>{
        artistas.map((artista) => {
          return (
            <CardArtists
              name={artista.name}
              genre={artista.genre}
              urlImg={artista.urlImg} />
          )
        })
      }
      </dialog>

    </>
  )
}

export default Header
