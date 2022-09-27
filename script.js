"use strict";

const choices = ["rock", "paper", "scissors"];
const getPlayerSelection = "RoCk";
let playerSelection = getPlayerSelection.toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSeiection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        return ("You lose! " + computerSelection + " beats " + playerSelection + ".");
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return ("You win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("It's a tie!");
    }
}

for (let i = 0; i < 5; i++) {
    // your code here!
 }

console.log("Computer: " + computerSelection + ". Player: " + playerSelection + ".");

console.log(playRound(playerSelection, computerSelection));