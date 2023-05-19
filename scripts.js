const shapes = ['rock', 'paper', 'scissor'];

const gameRock = document.getElementById('gameRock');
const gamePaper = document.getElementById('gamePaper');
const gameScissor = document.getElementById('gameScissor');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');

let computerScore = 0;
let playerScore = 0;

gameRock.addEventListener('click', () => {
    playRound('rock');
});

gamePaper.addEventListener('click', () => {
    playRound('paper');
});

gameScissor.addEventListener('click', () => {
    playRound('scissor');
});

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        resultElement.textContent = 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultElement.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultElement.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
    }

    updateScores();
    checkWinner();
}

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
}

function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5) {
        resultElement.textContent = 'Congratulations! You won the game!';
        disableButtons();
    } else if (computerScore === 5) {
        resultElement.textContent = 'Sorry, you lost the game!';
        disableButtons();
    }
}

function disableButtons() {
    gameRock.disabled = true;
    gamePaper.disabled = true;
    gameScissor.disabled = true;
}



// console.log(playRound('rock', computerSelection));
// console.log(playRound('paper', computerSelection));
// console.log(playRound('scissor', computerSelection));