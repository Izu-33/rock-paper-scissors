function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice() {
    const choice = prompt('Choose "rock", "paper", or "scissors":');
    return choice;
};

console.log(getHumanChoice());