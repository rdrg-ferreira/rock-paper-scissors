const choices = ["rock", "paper", "scissors"];

function capitalize(str) {
    const firstChar = str.slice(0, 1);
    return firstChar.toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    const intChoice = Math.floor((Math.random() * 3));
    
    return choices[intChoice];
}

function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissors:");
    
    while (!choices.includes(choice.toLowerCase())) {
        alert("That is not a valid option!");
        choice = prompt("Choose between rock, paper or scissors:");
    }

    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // if it is a tie
        if (humanChoice == computerChoice) {
            console.log("It's a tie! You both chose " + capitalize(humanChoice));
            return;
        }

        // if human chose rock
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;
                return;
            } else {
                console.log("You lose! Paper beats Rock");
                computerScore++;
                return;
            }
        }

        // if human chose paper
        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
                return;
            } else {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                return;
            }
        }

        // if human chose scissors
        else {
            if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;
                return;
            } else {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                return;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round " + (i + 1) + " -> Human Score: " + humanScore + " | Computer Score: " + computerScore);
        
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

playGame();