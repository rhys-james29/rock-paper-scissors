const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const winsDisplay =  document.getElementById('wins');
const lossDisplay = document.getElementById('losses');

let yourChoice;
let computerChoice;
let result;
var wins = 0;
var losses = 0;

winsDisplay.innerHTML = wins;
lossDisplay.innerHTML = losses;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    getResult();
    addScore();
}));

function addScore(){
  if (result === 'You win!'){
    wins = wins + 1;
    winsDisplay.innerHTML = wins;
  } else if (result=== 'You lose!'){
    losses = losses + 1;
    lossDisplay.innerHTML = losses;
  }
}
 




function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
     
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  if (randomNumber === 4) {
    computerChoice = 'lizard';
  }
  if (randomNumber === 5) {
    computerChoice = 'spock';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
     }



  function getResult() {

    if (computerChoice === yourChoice) {
      result = 'Draw!';
    }
    if (computerChoice === 'rock' && yourChoice === "paper") {
      result = 'You win!';
    }
    if (computerChoice === 'rock' && yourChoice === "scissors") {
      result = 'You lose!';
    }
    if (computerChoice === 'rock' && yourChoice === "lizard") {
        result = 'You lose!';
      }
      if (computerChoice === 'rock' && yourChoice === "spock") {
        result = 'You win!';
      }
    if (computerChoice === 'paper' && yourChoice === "scissors") {
      result = 'You win!';
    }
    if (computerChoice === 'paper' && yourChoice === "rock") {
      result = 'You lose!';
    }
    if (computerChoice === 'paper' && yourChoice === "lizard") {
        result = 'You win!';
      }
      if (computerChoice === 'paper' && yourChoice === "spock") {
        result = 'You lose!';
      }
    if (computerChoice === 'scissors' && yourChoice === "rock") {
      result = 'You win!';
    }
    if (computerChoice === 'scissors' && yourChoice === "paper") {
      result = 'You lose!';
    }
    if (computerChoice === 'scissors' && yourChoice === "lizard") {
        result = 'You lose!';
      }
    if (computerChoice === 'scissors' && yourChoice === "spock") {
        result = 'You win!';
      }
    if (computerChoice === 'lizard' && yourChoice === "paper") {
        result = 'You lose!';
      }
    if (computerChoice === 'lizard' && yourChoice === "rock") {
        result = 'You win!';
      }
    if (computerChoice === 'lizard' && yourChoice === "scissors") {
        result = 'You win!';
      }
    if (computerChoice === 'lizard' && yourChoice === "spock") {
        result = 'You lose!';
      }
    if (computerChoice === 'spock' && yourChoice === "paper") {
        result = 'You win!';
      }
    if (computerChoice === 'spock' && yourChoice === "rock") {
        result = 'You lose!';
      }
    if (computerChoice === 'spock' && yourChoice === "scissors") {
        result = 'You lose!';
      }
    if (computerChoice === 'spock' && yourChoice === "lizard") {
        result = 'You win!';
      }
      
      resultDisplay.innerHTML = result;
  }