let playerScore = 0;
let computerScore = 0;
const playerChoiceImage = document.querySelector ('#player-choice-image');
const computerChoiceImage = document.querySelector('#computer-choice-image');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game))


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


function game(e) {
    const playerChoise = e.target.id;
    playerChoiceImage.src = `/images/${e.target.id}.jpg`
    const computerSelection = getComputerChoice();
    computerChoiceImage.src = `/images/${computerSelection}.jpg`
    result.textContent = playRound(playerChoise,computerSelection) ;
    score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
    console.log(score.textContent)
    console.log(playerScore,computerScore);
    if (playerScore === 5 || computerScore === 5) showResult();
}

function showResult() {
    if (playerScore > computerScore) result.textContent= 'You Win'; else result.textContent = 'You Lose'
    result.textContent += ' your score: '+playerScore+' computer score: '+computerScore;
    score.textContent ='Game has ended!'
    playerScore=0;
    computerScore=0;
}


