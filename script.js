

const possibleOptions = ['Rock', 'Paper', 'Scissors'];

const buttons = document.querySelectorAll('button');
const outcome = document.querySelector('.outcome');

let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore')

let player = 0;
let computer = 0;


function cpuMove() {
    let randomNumber = Math.floor(Math.random() * possibleOptions.length)
    return randomNumber;
}

function computerPlay() {
    let randomNumber = cpuMove();

    if (randomNumber === 0) {
        return 'Rock'
    } else if (randomNumber === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}



function playRound(playerSelection) {


    let playerChoice = playerSelection;
    let computerChoice = computerPlay();

    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! Both drew ${playerChoice.toLowerCase()}.`
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        
        outcome.textContent = `You win! ${playerChoice} beats ${computerChoice.toLowerCase()}`
        player++
        playerScore.textContent = player;

            
    } else {
        outcome.textContent = `You lost! ${computerChoice} beats ${playerChoice.toLowerCase()}`
        computer++
        computerScore.textContent = computer;
    }
}


buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        playRound(e.target.id)
    })
})



