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
        } else if (computerSelection == 'scissor') {
            return 'You Won! Rock beats Scissor'
        } else {
            return 'It\'s a tie!'
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissor'){
            return 'You Lose! Scissor beats Paper'
        } else if (computerSelection == 'rock') {
            return 'You Won! Paper cover Rock'
        } else {
            return 'It\'s a tie!'
        }
    } else if (playerSelection == 'scissor') {
        if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissor'
        } else if (computerSelection == 'paper') {
            return 'You Won! Scissor cut Paper'
        } else {
            return 'It\'s a tie!'
        }
    }
}
console.log(playRound('rock', computerSelection));
console.log(playRound('paper', computerSelection));
console.log(playRound('scissor', computerSelection));