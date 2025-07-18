let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const intChoice = Math.floor((Math.random() * 3));
    return choices[intChoice];
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();

    // reset display
    const actionResult = document.querySelector("p.action-result");
    const action = document.querySelector("p.action");
    actionResult.textContent = "Let's start";
    action.textContent = "choose one of the actions";
}

function updateScores() {
    const human = document.querySelector("div.human > p.score");
    human.textContent = humanScore;
        
    const computer = document.querySelector("div.computer > p.score");
    computer.textContent = computerScore;

    // check if someone won
    if (humanScore === 5) {
        alert("You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("You lost the game!");
        resetGame();
    }
}

function displayAction(humanChoice, computerChoice, roundWinner) {
    const actionResult = document.querySelector("p.action-result");
    const action = document.querySelector("p.action");

    // get the text depending on the taken actions
    let actionResultText = ``;
    let actionText = ``;

    if (roundWinner === "human") {
        actionResultText = `You win!`;
        actionText = `${humanChoice} beats ${computerChoice}`;
    } else if (roundWinner === "computer") {
        actionResultText = `You lose!`;
        actionText = `${computerChoice} beats ${humanChoice}`;
    } else {
        actionResultText = `It's a tie!`;
        actionText = `you both chose ${humanChoice}`;
    }

    actionResult.textContent = actionResultText;
    action.textContent = actionText
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = "";

    // if it is a tie
    if (humanChoice === computerChoice) {
        roundWinner = "none";
        displayAction(humanChoice, computerChoice, roundWinner);
        return;
    }

    // if human wins
    if ((humanChoice === "rock" && computerChoice === "scissors" ) || 
        (humanChoice === "paper" && computerChoice == "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            roundWinner = "human";
            displayAction(humanChoice, computerChoice, roundWinner);
            updateScores();
            return;
        }
    
    // if computer wins
    else {
        computerScore++;
        roundWinner = "computer";
        displayAction(humanChoice, computerChoice, roundWinner);
        updateScores();
        return;
    }
}

const buttonContainer = document.querySelector(".button-container");
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