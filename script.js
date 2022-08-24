const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let computerScore = 0;
let yourScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    generateScore();
    generateEndGame();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }

  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }

  if (randomNumber === 3) {
    computerChoice = "Paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a Draw";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Won";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lost";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Won";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Won";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lost";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lost";
  }
  resultDisplay.innerHTML = result;
}

//Score
function generateScore() {
  if (result === "You Won") {
    yourScore++;
    document.getElementById("scr2").innerHTML = yourScore;
  } else {
    computerScore++;
    document.getElementById("scr1").innerHTML = computerScore;
  }
}

// Game End

function generateEndGame() {
  if (yourScore === 15) {
    alert("You Won");
    window.location.reload();
  }
  if (computerScore === 15) {
    alert("You Lost");
    window.location.reload();
  }
}
