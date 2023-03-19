let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}


function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === computerSelection) {
        result = "Egalitate!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "Ai pierdut!";
           
        } else {
            result = "Ai câștigat!";
           
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result = "Ai pierdut!";
            
        } else {
            result = "Ai câștigat!";
            
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "Ai pierdut!";
           
        } else {
            result = "Ai câștigat!";
         
        }
    }
    document.getElementById("result").innerHTML = result;
}


document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", computerPlay());
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", computerPlay());
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", computerPlay());
});