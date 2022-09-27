"use strict";

const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let playerSelectionInput;
let playerSelection;

//Generate a random number between 0-2 and the associated choice from the array
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

/* Play a round. First, check for a tie. 
Next, see if the computer won. If so, increase computer score by 1.
Then, check if the player won. If so, increase player score by 1.
Otherwise, indicate the player made an invalid selection. */
function playRound(playerSeiection, computerSelection) {
    if (playerSeiection === computerSelection) {
        return (`It's a tie! You both chose ${playerSelection}.`);
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
        return (`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return (`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        return (`Please choose rock, paper, or scissors.`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        let computerSelection = getComputerChoice().toLowerCase();
        playerSelectionInput = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerSelectionInput.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Computer: ${computerScore}. Player: ${playerScore}.`);
    }
}

game();