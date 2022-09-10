const searchBtn = document.querySelector(".icone-busca")
const search = document.querySelector(".busca-input")
searchBtn.addEventListener("click", () => {
    search.classList.toggle("ativo")
})

search.addEventListener("input", () => {
    const cards = document.querySelectorAll(".box__som")

    let reg = new RegExp(search.value, "i")

    if (search.value.length > 0) {
        cards.forEach(function (card) {
            nome = card.querySelector("h3").textContent
            if (!reg.test(nome)) {
                card.classList.add("invisivel")
            } else {
                card.classList.remove("invisivel")
            }
        })
    } else {
        cards.forEach(function (card) {
            card.classList.remove("invisivel")
        })
    }
})