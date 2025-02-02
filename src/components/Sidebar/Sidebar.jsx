import './Sidebar.css';
import Logo from "../../assets/img/icons/logo-spotify.png"

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar__navegation">
                <figure className="logo">
                    <a href="index.html" target="_self" title="Spotify">
                        <img src={Logo} alt="Spotify"/>
                    </a>
                </figure>
                <div className="navegacao">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="fa fa-house"></span>
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="library">
                <div className="library__section">
                    <button className="library__section__btn">
                        <span className="fa fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <button className="library__section__btn">
                        <span className="fa fa-plus"></span>
                    </button>

                </div>
                <section className="new_playlist">
                    <p>Crie sua primeira playlist</p>
                    <p>É facil, vamos te ajudar.</p>
                    <button>Criar playlist</button>
                </section>
                <section className="new_podcast">
                    <p>Que tal seguir um podcast novo?</p>
                    <p>Avisamos você com novos episodios .</p>
                    <button>Explore podcasts</button>
                </section>
                <section className="language">
                    <a href="#">Cookies</a>
                    <span>
                        <div className="language__btn">
                            <span className="fa fa-globe"></span>
                            <span>Português do Brasil</span>
                        </div>
                    </span>
                </section>
            </section>
        </aside>
    )
}

export default Sidebar
