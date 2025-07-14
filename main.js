function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const intChoice = Math.random() * 3;
    return choices[intChoice];
}

console.log(getComputerChoice());
