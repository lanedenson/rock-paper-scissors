function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let computerSelection = getComputerChoice();

const playerSelection = "Rock";

function game() {
    console.log("Computer: " + computerSelection + ". Player: " + playerSelection + ".");

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Paper beats Rock; Computer wins.");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Paper beats Rock; Player wins.");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Rock beats Scissors; Player wins.");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Rock beats Scissors; Computer wins.");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Scissors beats Paper; Computer wins.");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Scissors beats Paper; Player wins.");
    } else {
        console.log("It's a tie!");
    }
}

game();