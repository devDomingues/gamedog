const dog = document.querySelector('.dog')


document.addEventListener('keydown', jumpmove)
document.addEventListener('touchstart', jumpmove)


function jumpmove(e) {
    if(e.code === 'Space') {
        dog.classList.add('jump')
        setTimeout(() => {
            dog.classList.remove('jump')
        }, 500)

    }
}