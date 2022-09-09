const audios = document.querySelectorAll("audio")
console.log(audios)

//gera todos os icones
audios.forEach(function (audio) {
    geraCard(audio.dataset.nome)
})

const cards = document.querySelectorAll(".box__som")
cards.forEach(function (card) {
    const cardTitulo = card.querySelector(".nome-audio").textContent
    atribuiAudio(card, cardTitulo)
})

console.log(cards)

function geraCard(audioNome) {
    /* 
        modelo:

        <li class="box__som">
            <i class="fa-regular fa-file-audio box__som-icon"></i>
            <h3 class="nome-audio">rapaz</h3>
        </li>
     */

    //cria li
    var li = document.createElement("li")
    li.classList.add("box__som")

    //cria i
    var i = document.createElement("i")
    i.classList.add("fa-regular")
    i.classList.add("fa-file-audio")
    i.classList.add("box__som-icon")

    //cria h3
    var h3 = document.createElement("h3")
    h3.textContent = audioNome
    h3.classList.add("nome-audio")

    const sons = document.querySelector(".sons")

    li.appendChild(i)
    li.appendChild(h3)
    sons.appendChild(li)
}

function atribuiAudio(card, nome) {
    const id = `[data-nome="${nome}"]`
    const audio = document.querySelector(id)
    card.addEventListener("click", () => {
        audio.play()
    })
}