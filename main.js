function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const intChoice = Math.floor((Math.random() * 3));
    
    return choices[intChoice];
}