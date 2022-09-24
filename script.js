"use strict";

const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = "Rock";

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") ||
        (playerSelection === "Paper" && computerSelection === "Scissors")
    ) {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("It's a tie!");
    }
}

let computerSelection = getComputerChoice();

console.log("Computer: " + computerSelection + ". Player: " + playerSelection + ".");

console.log(playRound());