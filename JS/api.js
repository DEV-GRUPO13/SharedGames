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

let Primeiro_jogo = [];
let PRIMEIROS_DEZ = [];
let TODOS_JOGOS = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5507431f7msh8e87d3c573c423fp10ed87jsnefa568faa6bd',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
telaPrincipal.innerHTML = "";
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
    .then(response => response.json())
    .then(dadosServidor => {
        TODOS_JOGOS.push(dadosServidor);
        PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(1, 7));
        Primeiro_jogo.push(TODOS_JOGOS[0].slice(0, 1));



        Primeiro_jogo[0].forEach(jogo => {
            console.log(Primeiro_jogo)
            telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                            <img class="banner" src="${jogo.thumbnail}">
                                                            </a>`)
        });



        PRIMEIROS_DEZ[0].forEach(jogo => {
            console.log(jogo);

            telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                        <a href=${jogo.game_url}>
                                                        <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                        <p class="titulo">${jogo.title}</p>
                                                        </a>
                                                        </div>
                                                  

    
    
`)

        });

    })
    .catch(err => console.error(err));
function click_home() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(dadosServidor => {

            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";

            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });
            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);

                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                <a href=${jogo.game_url}>
                                                                <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                <p class="titulo">${jogo.title}</p>
                                                                </a>
                                                                </div>
                                                          

            
            
        `)

            });

        })
        .catch(err => console.error(err));
}
botao_home.addEventListener("click", click_home)

function click_pc() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    telaPrincipal.innerHTML = "";
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);

                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                <a href=${jogo.game_url}>
                                                                <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                <p class="titulo">${jogo.title}</p>
                                                                </a>
                                                                </div>

                                                            
            
        `)

            });

        })
        .catch(err => console.error(err));
}
botao_pc.addEventListener("click", click_pc)

function click_browser() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    telaPrincipal.innerHTML = "";
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                <a href=${jogo.game_url}>
                                                                <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                <p class="titulo">${jogo.title}</p>
                                                                </a>
                                                                </div>
                
                
                
            `)

            });

        })
        .catch(err => console.error(err));
}
botao_browser.addEventListener("click", click_browser)

function click_all() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                    <a href="${jogo.game_url}">
                                                                    <img class="imagem"alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                    <p class="titulo">${jogo.title}</p>
                                                                    </a>
                                                                    </div>
                    
                    
                    
                `)

            });

        })
        .catch(err => console.error(err));
}
botao_all.addEventListener("click", click_all)

function click_pvp() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=pvp', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogo">
                                                                        <a href="${jogo.game_url}">
                                                                        <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                        <p class="titulo>${jogo.title}</p>
                                                                        </a>
                                                                        </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_pvp.addEventListener("click", click_pvp)

function click_mmo() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">   
                                                                        <a href="${jogo.game_url}">
                                                                        <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                        <p class="titulo">${jogo.title}</p>
                                                                        </a>
                                                                        </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_mmo.addEventListener("click", click_mmo)

function click_survival() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=survival', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">   
                                                                        <a href="${jogo.game_url}">
                                                                        <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                        <p class="titulos">${jogo.title}</p>
                                                                        </a>
                                                                        </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_survival.addEventListener("click", click_survival)

function click_card() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=moba', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">   
                                                    <a href="${jogo.game_url}">
                                                    <img class="imagem" alt="${jogo.title}" src="${jogo.thumbnail}">
                                                    <p class="titulos">${jogo.title}</p>
                                                    </a>
                                                    </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_card.addEventListener("click", click_card)

function click_luta() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                        <a href="${jogo.game_url}">
                                                                        <img alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                        
                                                                        <p class="titulo">${jogo.title}</p>
                                                                        </a>
                                                                        </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_luta.addEventListener("click", click_luta)


function click_tiro() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                        <a href="${jogo.game_url}">
                                                                        <img class="imagem"alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                        <p class="titulo">${jogo.title}</p>
                                                                        </a>
                                                                        </div>
                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_tiro.addEventListener("click", click_tiro)

function click_militar() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=military', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                            <a href="${jogo.game_url}">
                                                            <img class="imagem"alt="${jogo.title}" src="${jogo.thumbnail}">
                                                            <p class="titulo">${jogo.title}</p>
                                                            </a>
                                                            </div>

                        
                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_militar.addEventListener("click", click_militar)

function click_acao() {
    TODOS_JOGOS = [];
    PRIMEIROS_DEZ = [];
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=action', options)
        .then(response => response.json())
        .then(dadosServidor => {
            TODOS_JOGOS.push(dadosServidor);
            PRIMEIROS_DEZ.push(TODOS_JOGOS[0].slice(0, 6));
            telaPrincipal.innerHTML = "";
            Primeiro_jogo[0].forEach(jogo => {
                console.log(Primeiro_jogo)
                telaPrincipal.insertAdjacentHTML("beforeend", ` <a href=${jogo.game_url}>
                                                                <img class="banner" src="${jogo.thumbnail}">
                                                                </a>`)
            });

            PRIMEIROS_DEZ[0].forEach(jogo => {
                console.log(jogo);
                telaPrincipal.insertAdjacentHTML("beforeend", `<div class="jogos">
                                                                <a href="${jogo.game_url}">
                                                                <img class="imagem"alt="${jogo.title}" src="${jogo.thumbnail}">
                                                                <p class="titulo">${jogo.title}</p>
                                                                </a>
                                                                </div>

                        
                        
                    `)

            });

        })
        .catch(err => console.error(err));
}
botao_acao.addEventListener("click", click_acao)