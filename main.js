const card = document.querySelector(".card")
const cardContent = document.querySelector(".card__content")

let rotX = 0
let rotY = 0
let scale = 1.2

card.onmousemove = (e) => {
    rotX = - (window.innerHeight / 2 -  e.pageY) / 5
    rotY = (window.innerWidth / 2 -  e.pageX) / 5
    card.style.transform = `scale(${scale}) rotateY(${rotY}deg) rotateX(${rotX}deg)`

    const axisX = e.offsetX/cardContent.clientWidth*100
    const axisY = e.offsetY/cardContent.clientHeight*100
    cardContent.style.backgroundPosition = `${100-axisX}% ${100-axisY}%`
}

card.onmouseleave = () => {
    card.style.transform = ""
}


card.onclick = () => {
    scale = 0.9
    card.style.transform = `scale(${scale}) rotateY(${rotY}deg) rotateX(${rotX}deg)`
    setTimeout(() => {
        scale = 1.2
        card.style.transform = `scale(${scale}) rotateY(${rotY}deg) rotateX(${rotX}deg)`
    }, 150)
}