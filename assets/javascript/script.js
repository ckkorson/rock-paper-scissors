let playerInput = prompt("Please enter R, P, or S");
var computerInput = ["R","P","S"]

function getRandom() {
   return Math.floor(Math.random() * 3)
}

var x = getRandom()
console.log("You played " + playerInput)
console.log("The computer played " + computerInput[x]);
alert("The computer played " + computerInput[x])

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

function findWinner() {
    if (playerInput === computerInput[x]) {
        return ("It's a tie!")
    }
    else if (playerInput === "R") {
        return (rock())
    }
    else if (playerInput === "S") {
        return (scissors())
    }
    else if (playerInput === "P") {
        return (paper())
    }
}

console.log(findWinner())
alert(findWinner())