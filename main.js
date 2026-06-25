console.log("No peeking, please.");

function getComputerChoice() {    
    const randomPicker = Math.floor(Math.random() * 3);
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "Scissor";

    if (randomPicker === 0) {
        return rock;
    } else if (randomPicker === 1) {
        return paper;
    } else if (randomPicker === 2) {
        return scissor;
    }
}

function getHumanChoice() {
    const choice = String(prompt("What's it going to be?", "Enter"));
    return choice;
}