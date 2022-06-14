const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
     
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  if (randomNumber === 4) {
    computerChoice = 'lizard'
  }
  if (randomNumber === 5) {
    computerChoice = 'spock'
  }
  computerChoiceDisplay.innerHTML = computerChoice
    
  }

  function getResult() {
    if (computerChoice === userChoice) {
      result = 'Draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'You lose!'
    }
    if (computerChoice === 'rock' && userChoice === "lizard") {
        result = 'You lose!'
      }
      if (computerChoice === 'rock' && userChoice === "spock") {
        result = 'You win!'
      }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === "lizard") {
        result = 'You win!'
      }
      if (computerChoice === 'paper' && userChoice === "spock") {
        result = 'You lose!'
      }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "lizard") {
        result = 'You lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "spock") {
        result = 'You win!'
      }
      if (computerChoice === 'lizard' && userChoice === "paper") {
        result = 'You lose!'
      }
      if (computerChoice === 'lizard' && userChoice === "rock") {
        result = 'You win!'
      }
      if (computerChoice === 'lizard' && userChoice === "scissors") {
        result = 'You win!'
      }
      if (computerChoice === 'lizard' && userChoice === "spock") {
        result = 'You lose!'
      }
      if (computerChoice === 'spock' && userChoice === "paper") {
        result = 'You win!'
      }
      if (computerChoice === 'spock' && userChoice === "rock") {
        result = 'You lose!'
      }
      if (computerChoice === 'spock' && userChoice === "scissors") {
        result = 'You lose!'
      }
      if (computerChoice === 'spock' && userChoice === "lizard") {
        result = 'You win!'
      }

    resultDisplay.innerHTML = result
  }