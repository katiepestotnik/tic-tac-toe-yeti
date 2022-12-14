//variables
const winningCombos = [
    //left to right
    ['box-1', 'box-2', 'box-3'],
    ['box-4', 'box-5', 'box-6'],
    ['box-7', 'box-8', 'box-9'],
    //top to bottom
    ['box-1', 'box-4', 'box-7'],
    ['box-2', 'box-5', 'box-8'],
    ['box-3', 'box-6', 'box-9'],
    //diagnol
    ['box-1', 'box-5', 'box-9'],
    ['box-3', 'box-5', 'box-7']
]
const winner = document.querySelector('.winner')
const playerX = []
const playerO = []
let winnerEnd
let currentPlayer = "X"
const turn = document.querySelector('#players-turn')
turn.innerHTML = currentPlayer
const boxes = document.querySelectorAll('.box')
const reset = document.querySelector('.reset')

//winner function
const isWinningMove = (playerX, playerO) => {
    let checkWinner = (player, winning) => winning.every(ele => player.includes(ele));
    winningCombos.forEach((win) => {
        if (checkWinner(playerX, win)) {
            winner.innerHTML = 'Player X wins!'
            // setTimeout(() => {
            //     location.reload()
            // }, 2000)
        winnerEnd = true
        } 
        if (checkWinner(playerO, win)) {
            winner.innerHTML = 'Player 0 wins!'
            // setTimeout(() => {
            //     location.reload()
            // }, 2000)
        winnerEnd = true

        }
    })
}

//click function
const handleClick = (e) => {
    e.preventDefault()
    let box = e.target
    if(winnerEnd)return
    if (box.innerHTML === '') {
        box.innerHTML = currentPlayer
        //update the state for players array
        if (currentPlayer === 'X') {
            playerX.push(box.id)
        } else {
            playerO.push(box.id)
        }
    } else {
        alert('Box already player, try another.')
        return
    }
    //check winner
    isWinningMove(playerX, playerO)
    //change box per turn
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
    //fix the h1 to display currentPlayer
    turn.innerHTML = currentPlayer
}

//event listeners
boxes.forEach((box) => {
    box.addEventListener('click', handleClick)
})

reset.addEventListener('click', () => {
    location.reload()
})
