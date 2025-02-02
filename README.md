# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Para configurar uma API simples utilizando o `json-server` para servir um arquivo `db.json` a partir de uma pasta `api-artists` na raiz do seu projeto, siga os passos abaixo:

### Passo 1: Instalar o `json-server`

Primeiro, você precisa instalar o `json-server` no seu projeto, que permitirá simular uma API RESTful com dados armazenados em um arquivo JSON.

Abra o terminal e, dentro da raiz do seu projeto, execute:

```bash
npm install json-server --save-dev
```

Ou, se você estiver usando `yarn`:

```bash
yarn add json-server --dev
```

### Passo 2: Criar o arquivo `db.json`

Na pasta `api-artists`, crie um arquivo chamado `db.json` (caso não exista) e adicione a estrutura de dados que você deseja. Um exemplo básico de como pode ser seu arquivo:

```json
{
  "playlists": [
    {
      "numberCard": "card1",
      "name": "Natalina",
      "urlImg": "assets/img/playlist/1.jpeg",
      "imgDiscricao": "Capa Playlist"
    },
    {
      "numberCard": "card2",
      "name": "Pop Mix",
      "urlImg": "assets/img/playlist/2.png",
      "imgDiscricao": "Capa Playlist"
    },
    {
      "numberCard": "card3",
      "name": "Friday One",
      "urlImg": "assets/img/playlist/3.jpeg",
      "imgDiscricao": "Capa Playlist"
    }
    // Adicione outros itens aqui conforme necessário
  ]
}
```

Esse arquivo simula um banco de dados com dados das playlists.

### Passo 3: Configurar o `json-server` no `package.json`

Agora, precisamos adicionar um script ao `package.json` para que possamos rodar o `json-server` facilmente. Abra o `package.json` e adicione o seguinte dentro de `scripts`:

```json
"scripts": {
  "start:api": "json-server --watch api-artists/db.json --port 5000"
}
```

Aqui estamos dizendo ao `json-server` para observar as mudanças no arquivo `db.json` dentro da pasta `api-artists` e servir a API na porta `5000`. Você pode mudar a porta se precisar de uma diferente.

### Passo 4: Rodar o `json-server`

Agora, no terminal, você pode rodar o servidor com o comando:

```bash
npm run start:api
```

Ou, se estiver usando `yarn`:

```bash
yarn start:api
```

Isso iniciará o servidor na URL `http://localhost:5000`. Agora você pode acessar seus dados via API RESTful.

### Passo 5: Acessando os dados da API

Agora você pode acessar a API no seu React da seguinte maneira:

#### Exemplo de `fetch` para obter as playlists:

```js
import { useState, useEffect } from 'react';

function SectionPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fazendo uma requisição para obter as playlists
    fetch('http://localhost:5000/playlists')
      .then(response => response.json())
      .then(data => {
        setPlaylists(data); // Atualiza o estado com os dados recebidos
      })
      .catch(error => {
        console.error("Erro ao carregar playlists", error);
      });
  }, []); // Dependência vazia para rodar uma vez quando o componente for montado

  return (
    <section className="section-artists-playlist">
      <div id="result-playlists">
        <div className="playlists">
          <h2>Navegar por todas as seções</h2>
        </div>

        <div id="all-playlists" className="all-playlists-contener">
          {playlists.map((playlist) => (
            <Card
              key={playlist.numberCard} // Usando numberCard como chave única
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
```

### Como funciona:
1. O `json-server` cria endpoints RESTful a partir do arquivo `db.json`. No exemplo acima, a URL `http://localhost:5000/playlists` vai retornar os dados das playlists.
2. O componente `SectionPlaylists` faz uma requisição para esse endpoint e exibe as playlists.

Agora, você tem uma API funcionando localmente com `json-server`, e o React consome essa API para mostrar os dados das playlists.

### Passo 6: Outros endpoints do `json-server`

O `json-server` cria automaticamente os seguintes endpoints para o seu `db.json`:

- `GET /playlists` — Retorna todas as playlists
- `GET /playlists/:id` — Retorna uma playlist específica
- `POST /playlists` — Adiciona uma nova playlist
- `PUT /playlists/:id` — Atualiza uma playlist específica
- `DELETE /playlists/:id` — Deleta uma playlist específica

### Considerações Finais:
- **Desenvolvimento Local:** O `json-server` é ótimo para desenvolvimento local e protótipos, mas para produção, você precisará de uma solução de backend real.
- **Personalização:** Você pode personalizar ainda mais o `json-server` adicionando filtros, rotas personalizadas, etc., consultando a [documentação do json-server](https://github.com/typicode/json-server).

Agora, você tem uma API local simulada com dados JSON e um frontend React consumindo essa API!
