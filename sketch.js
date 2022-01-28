const gridContainer = document.querySelector(".grid-container")
let gridItems = ""

function sketchRound(rows, cols) {
    createGrid(rows, cols)
    changeWhenHovering()
}

sketchRound(16, 16)

function createGrid(rows, cols) {
    gridContainer.style.setProperty("--grid-rows", rows)
    gridContainer.style.setProperty("--grid-cols", cols)
    for (let i = 0; i < (rows * cols); i++) {
        let item = document.createElement("div")
        // item.innerText= i+1
        gridContainer.appendChild(item).className = "grid-item"
    }
}

function changeWhenHovering() {
    gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach(item => (item.addEventListener("mouseover", (e) => e.target.classList.add("color"))))
}


const reDrawButton = document.getElementById("reDraw")

reDrawButton.addEventListener("click", clearAndReDraw)
console.log(reDrawButton)

function clearAndReDraw() {
    gridItems.forEach(item => item.classList.remove("color"))
    gridItems.forEach(item => item.remove())
    // let sideLength = promptHowBig()
    // console.log(sideLength)
    // sketchRound(sideLength, sideLength)

}

function promptHowBig() {  
    let sideLength = 0
    while (true) {
            sideLength = prompt("How many squares would you like per side? Input must be between 1 and 100")
            if (sideLength <= 100 && sideLength >0) {
               break
            }
    }
    return sideLength;
}


function erase() {
    gridItems.forEach(item => item.addEventListener("mouseover", (e) => {
        e.target.classList.remove("color")

    }))
}

// function drawBlack() {
//     gridItems.forEach(item => item.addEventListener("mouseover", (e) => {
//         e.target.classList.add("color")
//     }))
// }
let userChosenColor = ""

function color() { 
    userChosenColor = document.getElementById("colorpicker").value
    console.log(userChosenColor)

    gridItems.forEach(item => item.addEventListener("mouseover", (e) => {
        
        e.target.classList.add("color")
        e.target.style.setProperty("--userColor", userChosenColor)

        // e.target.style.backgroundColor = userChosenColor;
        // console.log(e.target.style.backgroundColor)
        // let targetItemToColor = e.target;
        // console.log(targetItemToColor)
        // console.log(targetItemToColor.backgroundColor )
        // targetItemToColor.backgroundColor = userChosenColor
        // e.target[className=".color"].backgroundColor = userChosenColor
    }
    // console.log(e.target[className="color"])
    ))
}


function recreateGrid() {
    clearAndReDraw()
    const lengthInput = document.getElementById("lengthInput").value
    sketchRound(lengthInput, lengthInput)
    const displayedLength = document.getElementById("displayedLength")
    displayedLength.innerHTML = lengthInput
}




// for (let i=0; i<16; i++) {
//     const row = document.createElement("div")
//     for (let j=0; j<16; j++) {
//         gridContainer.appendChild(row)
//         row.appendChild(document.createElement("div"))
//     }
//     gridContainer.appendChild(row)
// }

// const div = document.querySelector("div")
// div.style.border = "5px solid red"
// row.style.height = "50px"
