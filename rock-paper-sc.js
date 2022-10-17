let playerScore = 0;
let computerScore = 0;

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
    let choice= (prompt('choose Paper, Rock, Scissors'));
    return choice.toLowerCase();
}

//compare player's choice and computer choice
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection ==='rock') return('Draw');
            else if (computerSelection ==='paper') {
               computerScore +=1 
               return('You Lose, Paper beats rock!');
            }
            else if (computerSelection ==='scissors') {
                playerScore +=1;
                return('You Win, Rock beats Scissors');
            }
            
        case "paper":
            if (computerSelection ==='rock') {
                playerScore +=1;
                return('You Win, Paper beats rock!');
            }
            else if (computerSelection ==='paper') return('Draw!');
            else if (computerSelection ==='scissors') {
                computerScore +=1;
                return('You Lose, Scissors beats Paper');
            }
        case 'scissors':
            if (computerSelection ==='rock') {
                computerScore +=1;
                return('You Lose,Rock beats Scissors');
            }
            else if (computerSelection ==='paper') {
                playerScore +=1;
                return('You Win, Scissors beats Paper!');
            }
            else if (computerSelection ==='scissors') return('Draw');
    }

}
function game() {
    for (let i =0; i<5; i++) {
        const playerChoise = playerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerChoise,computerSelection));
    }
    if (playerScore > computerScore) {
        console.log('you Win','your score:',playerScore,'computer score:',computerScore)
    }
    else console.log('you Lose','your score:',playerScore,'computer score:',computerScore) 
    
}
game();


