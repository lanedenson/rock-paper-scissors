//Define the three options
const choices = ["Rock", "Paper", "Scissors"]; 

//Generate a random number between 0 and 2; these correspond with the choices array above.  Assign to getComputerChoice
let getComputerChoice = choices[Math.floor(Math.random()*3)]; 

//Display the computer choice in the console
console.log(getComputerChoice);
