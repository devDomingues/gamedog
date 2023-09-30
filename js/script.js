const dog = document.querySelector('.dog')
const arbusto = document.querySelector('.arbusto')
const nuvens = document.querySelector('.nuvens')
const arvore = document.querySelector('.arvore')
const explosao = document.querySelector('.explosao')


document.addEventListener('keydown', jumpmove)
document.addEventListener('touchstart', jumpmove)

const loop = setInterval(() => {
    const arbustopositon = arbusto.offsetLeft
    const dogpositon = dog.offsetTop
    const nuvensp = nuvens.offsetLeft
    const arvorep = arvore.offsetLeft

    if(dogpositon > 340 && arbustopositon <= 120 && arbustopositon >= 25 ) {
        arbusto.style.left = `${arbustopositon}px`
        nuvens.style.left = `${nuvensp}px`
        arvore.style.left = `${arvorep}px`
        dog.style.display = 'none'
        explosao.style.display = 'block'
        explosao.style.top = `${dogpositon}px`
    }

}, 10)


function jumpmove(e) {
    if(e.code === 'Space' || e.code == 'touchstart') {
        dog.classList.add('jump')
        setTimeout(() => {
            dog.classList.remove('jump')
        }, 500)

    }
}