var gameOver = false;
var computerInput = ["R","P","S"];

function getRandom() {
   return Math.floor(Math.random() * 3)
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
        gameOver = true
        alert("The computer played " + computerInput[x])
        return ("It's a tie!")
    }
    else if (playerInput === "R") {
        gameOver = true
        alert("The computer played " + computerInput[x])
        return (rock())
    }
    else if (playerInput === "S") {
        gameOver = true
        alert("The computer played " + computerInput[x])
        return (scissors())
    }
    else if (playerInput === "P") {
        gameOver = true
        alert("The computer played " + computerInput[x])
        return (paper())
    }
    else {
        return (tryAgain())
    }
}

function playAgain() {
    if (confirm("Would you like to play again?") = false) {
        gameOver = true
    }
}

while (gameOver === false) {
    var playerInput = prompt("Please enter R, P, or S").toUpperCase();
    var x = getRandom()
    alert(findWinner())
    // playAgain()
}