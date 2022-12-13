let botao_pc = document.getElementById("botao_pc");
botao_pc.value = "PC"
let botao_browser = document.getElementById("botao_browser");
botao_browser.value = "Browser"
let botao_all = document.getElementById("botao_all");
botao_all.value = "All"
let botao_fav = document.getElementById("botao_fav");
botao_fav.value = "Favoritos"


let ativar = document.getElementsByClassName("cor");

function mudarcor(clicou) {
    for (i = 0; i < 4; i++) {
        if (i == clicou) {
            ativar[i].classList.toggle("butao_stly");
            ativar[i].classList.toggle("mudar");
        } else {
            if (ativar[i].classList.contains("butao_stly")) {
                continue;
            } else {
                ativar[i].classList.toggle("butao_stly");
                ativar[i].classList.toggle("mudar");
            }
        }

    }
}
ativar[0].addEventListener("click",() => mudarcor(0));
ativar[1].addEventListener("click",() => mudarcor(1));
ativar[2].addEventListener("click",() => mudarcor(2));
ativar[3].addEventListener("click",() => mudarcor(3));