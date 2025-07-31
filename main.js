'use strict'

const galeria = document.getElementById('galeria')

async function chamarFotos(){
    const response = await fetch("http://localhost:3000/fotos")
    // const response = await fetch(BASE_API)
    const dados = await response.json()

    if(dados){
        return dados
    }else{
        return console.error("Erro ao acessar API");
    }
}

async function pegarFotos(){
   const fotos = await chamarFotos()
    return fotos
    // console.log(fotos);

}

async function exibirFotos(){
    const fotos = await pegarFotos()

    fotos.forEach(foto => {
        const imagem = document.createElement('img')
        imagem.src = foto.imagem
        imagem.alt = foto.legenda

        const legenda = document.createElement('p')
        legenda.textContent = foto.legenda

        const data = document.createElement('p')
        data.textContent = `Data: ${foto.data}`

        const container = document.createElement('div')

        container.appendChild(imagem)
        container.appendChild(legenda)
        container.appendChild(data)

        galeria.appendChild(container)

        
    });
}
exibirFotos()


