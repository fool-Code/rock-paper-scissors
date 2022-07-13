const shapes = ['rock', 'paper', 'scissor'];

function computerPlay() {
    let randomShape = shapes[Math.floor(Math.random() * 3)];
    return randomShape;
}
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper'){
            return 'You Lose! Paper beats Rock'
        } else {
            return 'You Won'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissor'){
            return 'You Lose! Scissor beats Paper'
        } else {
            return 'You Won'
        }
    } else if (playerSelection == 'scissor') {
        if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissor'
        } else {
            return 'You Won'
        }
    }
}
console.log(playRound('rock', computerSelection));
console.log(playRound('paper', computerSelection));
console.log(playRound('scissor', computerSelection));