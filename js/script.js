// 1) Define required constants
// 2) Define required variables used to track the state of the game
// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
// 4) Upon loading the app should:
//     4.1) Initialize the state variables
//     4.2) Render those values to the page
//     4.3) Wait for the user to click a square
// 5) Handle a player clicking a square
// 6) Handle a player clicking the replay button

//get the element / add eventListener
// const box_1 = document.querySelector('#box-1')
// const box_2 = document.querySelector('#box-2')
// const box_3 = document.querySelector('#box-3')
// const box_4 = document.querySelector('#box-4')
// const box_5 = document.querySelector('#box-5')
// const box_6 = document.querySelector('#box-6')
// const box_7 = document.querySelector('#box-7')
// const box_8 = document.querySelector('#box-8')
// const box_9 = document.querySelector('#box-9')
// const board = [
//     box_1,
//     box_2,
//     box_3,
//     box_4,
//     box_5,
//     box_6,
//     box_7,
//     box_8,
//     box_9
// ]

let currentPlayer = "X"
const turn = document.querySelector('#players-turn')
turn.innerHTML = currentPlayer
const winningCombos = []
let gamePlay
const boxes = document.querySelectorAll('.box')
const handleClick = (e) => {
    e.preventDefault()
    let box = e.target
    if (box.innerHTML === '') {
        box.innerHTML = currentPlayer
    } else {
        alert('Box already player, try another.')
        return
    }
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
    turn.innerHTML = currentPlayer
}
boxes.forEach((box) => {
    box.addEventListener('click', handleClick)
})

const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    location.reload()
})