const menuBtn = document.querySelector(".menu-icon")
const menu = document.querySelector(".right")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-ativo")
})