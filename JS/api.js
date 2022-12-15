let telaPrincipal = document.getElementById("tela_principal");
let botao_pvp = document.getElementById("pvp");
botao_pvp.value;
let botao_mmo = document.getElementById("MMORPG");
botao_mmo.value;
let botao_survival = document.getElementById("survival");
botao_survival.value;
let botao_card = document.getElementById("card");
botao_card.value;
let botao_luta = document.getElementById("luta");
botao_luta.value;
let botao_tiro = document.getElementById("tiro");
botao_tiro.value;
let botao_militar = document.getElementById("militar");
botao_militar.value;
let botao_home = document.getElementById("home");
botao_home.value;
let botao_acao = document.getElementById("acao");
botao_acao.value;

const PRIMEIROS_DEZ = [];
const TODOS_JOGOS = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5507431f7msh8e87d3c573c423fp10ed87jsnefa568faa6bd',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
function click_home() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);

                telaPrincipal.insertAdjacentHTML("beforeend", `<div id="tela_prin">
                                                            <img alt="${jogo.title}" src="${jogo.thumbnail}">
                                                            <h1>${jogo.title}</h1>
                                                            </div>
            
            
            
        `)

            });

        })
        .catch(err => console.error(err));
}
botao_home.addEventListener("click", click_home)

function click_pc() {
    telaPrincipal.insertAdjacentHTML=null;
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);

                telaPrincipal.insertAdjacentHTML("beforeend", `<div id="tela_prin">
                                                            <img alt="${jogo.title}" src="${jogo.thumbnail}">
                                                            <h1>${jogo.title}</h1>
                                                            </div>
            
            
            
        `)

            });

        })
        .catch(err => console.error(err));
}
botao_pc.addEventListener("click", click_pc)

function click_browser() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_browser.addEventListener("click", click_browser)

function click_all() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_all.addEventListener("click", click_all)

function click_pvp() {
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=pvp', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_pvp.addEventListener("click", click_pvp)

function click_mmo() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_mmo.addEventListener("click", click_mmo)

function click_survival() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=survival', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_survival.addEventListener("click", click_survival)

function click_card() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=moba', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_card.addEventListener("click", click_card)

function click_luta() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_luta.addEventListener("click", click_luta)
function click_tiro() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_tiro.addEventListener("click", click_tiro)

function click_militar() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=military', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_militar.addEventListener("click", click_militar)

function click_acao() {
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=action', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));


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
}
botao_acao.addEventListener("click", click_acao)