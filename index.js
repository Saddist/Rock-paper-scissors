const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose rock papers or scissors","rock");
function compare(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors"){
        return "Player";
    }
    else {
        return "Computer";
    }
}
switch (compare(playerSelection, computerSelection)) {
    case "Tie":
        console.log("NO one wins");
        break;
    case "Player":
        console.log("Player wins");

    default:
        console.log("Computer wins")
        break;
}