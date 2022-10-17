//get computer choice
function getComputerChoice() {
    let choice = Math.floor((Math.random()*3));
    switch (choice) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors'
            break;
    }
    return choice;
}
//get player's selection
function playerSelection() {
    return(prompt('choose Paper, Rock, Scissors'));
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection ==='rock') return('Draw');
            else if (computerSelection ==='paper') return('You Lose, Paper beats rock!');
            else if (computerSelection ==='scissors') return('You Win, Rock beats Scissors');
        case "paper":
            if (computerSelection ==='rock') return('You Win, Paper beats rock!');
            else if (computerSelection ==='paper') return('Draw!');
            else if (computerSelection ==='scissors') return('You Lose, Scissors beats Paper');
        case 'scissors':
            if (computerSelection ==='rock') return('Lose');
            else if (computerSelection ==='paper') return('You Win, Scissors beats Paper!');
            else if (computerSelection ==='scissors') return('Draw');
    }

}

const playerChoise = playerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerChoise,computerSelection));


