//function to randomly return rock paper or scissors
function getComputerChoice (min, max) {
    let computerChoice;
    //returns an integer number from x to y; 
    min = Math.ceil(1);
    max = Math.floor(3);
    computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    //make the function returns string options of rock/paper/scissors instead of numbers
    switch (computerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

// ask a person for an answer, store it, return it
function getHumanChoice () {
    let humanChoice;
    return humanChoice = prompt("type your choice", "");
}

console.log(getComputerChoice());
console.log(getHumanChoice());






