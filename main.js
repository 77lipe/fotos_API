'use strict'

const galeriaSlider = document.getElementById('galeria-slide')

async function chamarFotos() {
  const response = await fetch("http://localhost:3000/fotos")
  const dados = await response.json()
  return dados || console.error("Erro ao acessar API")
}

async function exibirFotos() {
  const fotos = await chamarFotos()

  fotos.forEach(foto => {
    const imagem = document.createElement('img')
    imagem.src = foto.imagem
    imagem.alt = foto.legenda

    const legenda = document.createElement('h2')
    legenda.textContent = foto.legenda

    const data = document.createElement('p')
    data.textContent = `Data: ${foto.data}`

    const container = document.createElement('div')
    container.classList.add('galeria-item')

    container.appendChild(imagem)
    container.appendChild(legenda)
    container.appendChild(data)

    galeriaSlider.appendChild(container)
  })

  iniciarSlide(fotos.length) // Ativa o slide automático
}

let slideAtual = 0

function iniciarSlide(qtdSlides) {
  setInterval(() => {
    slideAtual = (slideAtual + 1) % qtdSlides
    const larguraSlide = document.getElementById('galeria').offsetWidth
    document.getElementById('galeria-slide').style.transform = `translateX(-${slideAtual * larguraSlide}px)`
  }, 4000) // Muda de slide a cada 3 segundos
}

exibirFotos()
