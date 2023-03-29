const choices = document.querySelectorAll('.choices img');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const winningScore = 5;
let playerChoice;
let computerChoice;
let playerScoreCount = 0;
let computerScoreCount = 0;

choices.forEach(choice => choice.addEventListener('click', function() {
  playerChoice = this.alt;
  computerChoice = getComputerChoice();
  compareChoices(playerChoice, computerChoice);
  if (playerScoreCount === winningScore || computerScoreCount === winningScore) {
    endGame();
  }
}));

function getComputerChoice() {
  const computerChoices = ['Rock', 'Paper', 'Scissors'];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayResult('It\'s a tie!');
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors' ||
             playerChoice === 'Paper' && computerChoice === 'Rock' ||
             playerChoice === 'Scissors' && computerChoice === 'Paper') {
    displayResult('Player wins!');
    playerScoreCount++;
  } else {
    displayResult('Computer wins!');
    computerScoreCount++;
  }
  updateScore();
}

function displayResult(result) {
  document.getElementById('result').innerHTML = result;
}

function updateScore() {
  playerScore.textContent = playerScoreCount;
  computerScore.textContent = computerScoreCount;
}

function endGame() {
  if (playerScoreCount > computerScoreCount) {
    displayResult('Player wins the game!');
  } else {
    displayResult('Computer wins the game!');
  }
  playerScoreCount = 0;
  computerScoreCount = 0;
  updateScore();
}