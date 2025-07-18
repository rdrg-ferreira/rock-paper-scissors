const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const intChoice = Math.floor((Math.random() * 3));
    
    return choices[intChoice];
}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function updateScores(roundWinner) {
    if (roundWinner === "human") humanScore++;
    else if (roundWinner === "computer") computerScore++;

    roundCounter++;
    console.log(`Round ${roundCounter} -> Human Score: ${humanScore} | Computer Score: ${computerScore}`);

    if (humanScore === 5) console.log("You won the game!");
    else if (computerScore === 5) console.log("You lost the game!");
}

function playRound(humanChoice, computerChoice) {
    // if it is a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
        updateScores("none");
        return;
    }

    // if human wins
    if ((humanChoice === "rock" && computerChoice === "scissors" ) || 
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            updateScores("human");
            return;
        }
    
    // if computer wins
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        updateScores("computer");
        return;
    }
}

const buttonContainer = document.querySelector(".container");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

buttonContainer.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;

        case "paper":
            playRound("paper", getComputerChoice());
            break;

        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});