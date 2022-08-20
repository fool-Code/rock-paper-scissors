const shapes = ['rock', 'paper', 'scissor'];

function computerPlay() {
    let randomShape = shapes[Math.floor(Math.random() * 3)];
    return randomShape;
}
const computerSelection = computerPlay();

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper'){
            computerScore++;
            return 'You Lose! Paper beats Rock'
        } else if (computerSelection == 'scissor') {
            playerScore++;
            return 'You Won! Rock beats Scissor'
        } else {
            return 'It\'s a tie!'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissor'){
            computerScore++;
            return 'You Lose! Scissor beats Paper'
        } else if (computerSelection == 'rock') {
            playerScore++;
            return 'You Won! Paper cover Rock'
        } else {
            return 'It\'s a tie!'
        }
    } else if (playerSelection == 'scissor') {
        if (computerSelection == 'rock'){
            computerScore++;
            return 'You Lose! Rock beats Scissor'
        } else if (computerSelection == 'paper') {
            playerScore++;
            return 'You Won! Scissor cut Paper'
        } else {
            return 'It\'s a tie!'
        }
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i ++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
          
    }
        if(playerScore > computerScore){
            console.log('You win the game')
    }
        else if(playerScore < computerScore){
            console.log('You lose the game')
    }
        else if(playerScore === computerScore){
            console.log('Draw')
        }
}

// console.log(playRound('rock', computerSelection));
// console.log(playRound('paper', computerSelection));
// console.log(playRound('scissor', computerSelection));