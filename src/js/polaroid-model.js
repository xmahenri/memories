import {polaroid_list} from "./data.js"

const albun = document.querySelector("#albun")

function createPolaroid(obj) {
    const rawContent = `
        <div class="polaroid">
            <div class="front">
                <div class="photo">
                    <img src="${obj.image}" alt="">
                </div>
            </div>
            <div class="back">
                <h1 class="title">${obj.title}</h1>
                <p class="text">${obj.text}</p>
            </div>
        </div>
    `
    let elementDiv = document.createElement("div")
    elementDiv.innerHTML = rawContent
    
    return elementDiv
}

polaroid_list.forEach((polaroid) => {
    console.log(polaroid)
    albun.appendChild(createPolaroid(polaroid))
}) 

document.addEventListener("click", (e) => {
    const card = e.target.closest(".polaroid")
    if (!card) return

    card.classList.toggle("flipped")
})
