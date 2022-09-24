function getComputerChoice() {    
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("It's a tie!");
    }
}

const choices = ["Rock", "Paper", "Scissors"];

let computerSelection = getComputerChoice();

const playerSelection = "Rock";

console.log("Computer: " + computerSelection + ". Player: " + playerSelection + ".");

console.log(playRound());