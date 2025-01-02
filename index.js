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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    while(!validChoices.includes(humanChoice)) {
        console.log('Please choose "rock", "paper", or "scissors".');
        humanChoice = getHumanChoice().toLowerCase();
    }

    if(humanChoice === computerChoice) {
        console.log(`It's a tie! Both players chose: ${humanChoice}`);
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. 
                    Player: ${humanScore} vs Computer: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`You lose. ${humanChoice} loses to ${computerChoice}. 
                    Player: ${humanScore} vs Computer: ${computerScore}`);
    }
};

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);