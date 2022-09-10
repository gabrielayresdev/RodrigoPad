const inputFile = document.querySelector("#file")
const botaoAdd = document.querySelector(".input-submit")
const audiosDiv = document.querySelector(".audiosDiv")

inputFile.addEventListener("change", (event) => {
    const inputTarget = event.target
    const file = inputTarget.files[0] //pega o arquivo do input type="file"

    if (file) { //verifica se o arquivo foi adicionado
        const reader = new FileReader() //cria um objeto do tipo FileReader
        reader.readAsDataURL(file) //seta o tipo de leitura para url
        reader.addEventListener("load", (event) => { //quando o arquivo for carregado, realiza a função
            const readerTarget = event.target
            console.log(event)
            console.log(event.target)
            console.log(event.target.result)

            const audio = document.createElement("audio")

            botaoAdd.addEventListener("click", () => {
                const nome = document.querySelector("#input-nome")
                audio.src = readerTarget.result //pega o resultado do load
                audio.setAttribute("data-nome", nome.value)
                audiosDiv.appendChild(audio)
                geraCard(nome.value)

                const cards = document.querySelectorAll(".box__som")
                const card = cards[cards.length - 1]
                atribuiAudio(card, nome.value)
                nome.value = ""
            })
        })
    } else {
        console.log("Cancelado")
    }
})