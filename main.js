const choices = ["rock", "paper", "scissors"];

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