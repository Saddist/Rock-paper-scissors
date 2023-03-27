const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
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
// let won = compare();
// function who(won){
//     let result = compare();
//     if(result == "Tie"){
//         // console.log("Inside the won");
//         return 0;
//     }
//     else if(result == "Computer"){
//         return 1;
//     }
//     else{
//         return 2;
//     }
// }
function game(){
    let playerCount = 0;
    let computerCount = 0;
    
    for(i=0;i<5;i++){
        const playerChoice = prompt("Choose rock papers or scissors","rock");
        const computerSelection = getComputerChoice();
        let playerSelection = playerChoice.toLowerCase();
        let won = compare(playerSelection,computerSelection);
        if(won== "Tie"){
            console.log(`Player chose" ${playerSelection}  "and computer chose "  ${computerSelection} "so its a tie` );
            continue;
        }else if(won == "Player"){
            // console.log("Player won");
            console.log(`Player chose" ${playerSelection}  " and computer chose " ${computerSelection} " so player won` );
            playerCount++;
        }
        else{
            console.log(`Player chose"  ${playerSelection} " and computer chose "  ${computerSelection}  "so computer won `);
            computerCount++;
        }
    }
    if(playerCount > computerCount){
        console.log("Player won");
    }else if(playerCount < computerCount){
        console.log("Computer Wins");
    }else(
        console.log("It's is tie")
    )
}
game()