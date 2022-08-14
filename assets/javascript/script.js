var gameOver = false;
var computerInput = ["R","P","S"];

function getRandom() {
   return Math.floor(Math.random() * 3)
}

function startGame() {
    gameOver = !confirm("Do you want to play rock, paper, scissors?");
}

function rock() {
    if (computerInput[x] === "P") {
        return ("You lost.")
    }
    else {
        return ("You won!")
    }
}

function paper() {
    if (computerInput[x] === "S") {
        return ("You lost.")
    }
    else {
        return ("You won!")
    }
}

function scissors() {
    if (computerInput[x] === "R") {
        return ("You lost.")
    }
    else {
        return ("You won!")
    }
}

function tryAgain() {
    return ("Please enter R, P, or S")
}

function findWinner() {
    if (playerInput === computerInput[x]) {
        alert("The computer played " + computerInput[x])
        return ("It's a tie!")
    }
    else if (playerInput === "R") {
        alert("The computer played " + computerInput[x])
        return (rock())
    }
    else if (playerInput === "S") {
        alert("The computer played " + computerInput[x])
        return (scissors())
    }
    else if (playerInput === "P") {
        alert("The computer played " + computerInput[x])
        return (paper())
    }
    else {
        return (tryAgain())
    }
}

function playAgain() {
    gameOver = !confirm("Do you want to play again?")
}

startGame()

while (gameOver === false) {
    var playerInput = prompt("Please enter R, P, or S").toUpperCase();
    var x = getRandom()
    alert(findWinner())
    playAgain()
}