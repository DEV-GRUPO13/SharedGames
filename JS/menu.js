const list = document.querySelectorAll('.list')
function activelink() {
    list.forEach((item) => item.classList.remove("ativa"));
    this.classList.add("ativa");

}
list.forEach((item) => item.addEventListener("click", activelink));