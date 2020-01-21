

const possibleOptions = ['Rock', 'Paper', 'Scissors'];

const choices = document.querySelectorAll('.game div');
const outcome = document.querySelector('.outcome');

let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore')


let playerText = `player: `
let computerText = 'cpu: '
let player = 0;
let computer = 0;
playerScore.textContent = playerText;
computerScore.textContent = computerText;


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
        outcome.innerHTML = `Tie! <br> Both drew ${playerChoice.toLowerCase()}`
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        
        outcome.innerHTML = `You win! <br> ${playerChoice} beats ${computerChoice.toLowerCase()}`
        player++
        playerScore.textContent = playerText + player

            
    } else {
        outcome.innerHTML = `You lost! <br> ${computerChoice} beats ${playerChoice.toLowerCase()}`
        computer++
        computerScore.textContent = computerText + computer;
    }
}


choices.forEach(function (choice) {
    choice.addEventListener('click', (e) => {
        playRound(e.currentTarget.id)
    })
})



