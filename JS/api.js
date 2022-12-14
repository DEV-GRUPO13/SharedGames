let telaPrincipal = document.getElementById("tela_principal");
const PRIMEIROS_DEZ = [];
const TODOS_JOGOS = [];

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5439249f0mshb146dea21bf51edp1e09acjsna0cbdeb61359',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
    .then(response => response.json())
    .then(dadosServidor => {
        TODOS_JOGOS.push(dadosServidor);
        PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 10));


        PRIMEIROS_DEZ[0].forEach(jogo => {
            console.log(jogo);
            telaPrincipal.insertAdjacentHTML("beforeend", `<div>
                                                            <img alt="${jogo.title}" src="${jogo.thumbnail}">
                                                            <h1>${jogo.title}</h1>
                                                            </div>
            
            
            
        `)

        });

    })
    .catch(err => console.error(err));