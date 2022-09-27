"use strict";

const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let getPlayerSelection;
let playerSelection;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSeiection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        return ("You lose! " + computerSelection
            + " beats " + playerSelection + ".");
    } 
    
    else if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return ("You win! " + playerSelection
            + " beats " + computerSelection + ".");
    } 
    
    else if (playerSeiection === computerSelection) {
        return ("It's a tie! You both chose " + playerSelection + ".");
    } 
    
    else {
        return ("Please choose rock, paper, or scissors.");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        let computerSelection = getComputerChoice().toLowerCase();
        getPlayerSelection = prompt("Rock, Paper, or Scissors?");
        playerSelection = getPlayerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer score: " + computerScore + ". Player score: "
            + playerScore + ".");
    }
}

game();