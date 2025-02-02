import { useState, useEffect } from 'react';
import Card from "../Card/Card";
import "./SectionPlaylists.css";
import dataPlaylists from "./playlists.json";

function SectionPlaylists() {
	const [saudacao, setSaudacao] = useState('Boas Vindas');
	// Função para exibir a saudação com base no horário
	function exibirSaudacao() {
		const agora = new Date();
		const hora = agora.getHours();
		let saudacao;

		if (hora >= 5 && hora < 12) {
			saudacao = "Bom dia";
		} else if (hora >= 12 && hora < 18) {
			saudacao = "Boa tarde";
		} else {
			saudacao = "Boa noite";
		}
		return saudacao;
	}

	// Usando useEffect para definir a saudação apenas uma vez ao carregar o componente
	useEffect(() => {
		const novaSaudacao = exibirSaudacao();
		setSaudacao(novaSaudacao);
	}, []); // A dependência vazia [] garante que o useEffect só seja chamado uma vez ao montar o componente

	return (
		<section className="section-artists-playlist">
			<div id="result-playlists">
				<div className="playlists">
					<h1 id="saudacao">{saudacao}</h1>
					<h2>Navegar por todas as seções</h2>
				</div>

				<div id="all-playlists" className="all-playlists-contener">
					{dataPlaylists.playlists.map((playlist) => (
						<Card
							key={playlist.numberCard}
							numberCard={playlist.numberCard}
							name={playlist.name}
							urlImg={playlist.urlImg}
							imgDiscricao={playlist.imgDiscricao}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionPlaylists;
