// array of possible random answers
var computerInput = ["R","P","S"];
// variable to store user wins
var wins = 0;
// variable to store user losses
var losses = 0;
// variable to store user ties
var ties = 0;
// function to get a random number between 0 and 2
function getRandom() {
   return Math.floor(Math.random() * 3)
}
// function to ask user if they would like to play
function startGame() {
    gameOver = !confirm("Do you want to play rock, paper, scissors?");
}
// function for if user guesses rock and it is not a tie
function rock() {
    if (computerInput[x] === "P") {
        losses++
        return ("You lost.")
    }
    else {
        wins++
        return ("You won!")
    }
}
// function for if user guesses paper and it is not a tie
function paper() {
    if (computerInput[x] === "S") {
        losses++
        return ("You lost.")
    }
    else {
        wins++
        return ("You won!")
    }
}
// function for if user guesses scissors and it is not a tie
function scissors() {
    if (computerInput[x] === "R") {
        losses++
        return ("You lost.")
    }
    else {
        wins++
        return ("You won!")
    }
}
// tell the user they had an invalid input
function tryAgain() {
    return ("You must enter R, P, or S")
}
// function to check for a tie, determine the winner, or tell the user they had
// an invalid input
function findWinner() {
    if (playerInput === computerInput[x]) {
        ties++
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
// keep track of the score
function gameScore() {
    alert("Your Score" + "\n" + "Wins: " + wins +
    "\n" + "Losses: " + losses + "\n" + "Ties: " + ties)
}
// ask user if they want to play again
function playAgain() {
    gameOver = !confirm("Do you want to play again?")
}
// run startGame function
startGame()
// while loop that will allow user to continue playing until they click cancel
while (gameOver === false) {
    var playerInput = prompt("Please enter R, P, or S").toUpperCase();
    var x = getRandom()
    alert(findWinner())
    gameScore()
    playAgain()
}