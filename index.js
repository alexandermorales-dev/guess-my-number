// selecting elements
const mainContainer = document.querySelector(".main-container");
const btnAgain = document.querySelector(".btn-again");
const btnCheck = document.querySelector(".btn-check");
const secretNumberText = document.querySelector(".secret-number");
const guessingTxt = document.querySelector(".guessing-txt");
const scoreTxt = document.querySelector(".value-score");
const highScoreTxt = document.querySelector(".value-high-score");
let secretNumber;
let score;
let highScore = 0;
let isPlaying;

// init values

score = 20;
isPlaying = true;
scoreTxt.textContent = score;
secretNumber = Math.trunc(Math.random() * 20) + 1;

// init function

const initValues = function () {
  score = 20;
  isPlaying = true;
  scoreTxt.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess-input").value = 0;
  mainContainer.classList.remove("loser-class");
  mainContainer.classList.remove("winner-class");
  secretNumberText.textContent = "?";
  guessingTxt.textContent = "Start guessing";
};

// check input against secret number
btnCheck.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess-input").value);
  if (isPlaying) {
    if (score > 1) {
      if (guessInput === secretNumber) {
        guessingTxt.textContent = "Correct!";
        secretNumberText.textContent = secretNumber;
        mainContainer.classList.add("winner-class");
        isPlaying = false;
        if (score > highScore) {
          highScore = score;
          highScoreTxt.textContent = highScore;
        }
      } else if (guessInput > secretNumber) {
        score--;
        scoreTxt.textContent = score;
        guessingTxt.textContent = "Too high!";
      } else if (guessInput < secretNumber) {
        score--;
        scoreTxt.textContent = score;
        guessingTxt.textContent = "Too low!";
      }
    } else {
      scoreTxt.textContent = 0;
      guessingTxt.textContent = "You lost the game!";
      secretNumberText.textContent = secretNumber;
      mainContainer.classList.add("loser-class");
    }
  }
});

btnAgain.addEventListener("click", function () {
  document.querySelector(".guess-input").value = 0;
  secretNumber = Math.trunc(Math.random() * 21);
  score = 20;
  scoreTxt.textContent = score;
  isPlaying = true;
  mainContainer.classList.remove("loser-class");
  mainContainer.classList.remove("winner-class");
  secretNumberText.textContent = "?";
  guessingTxt.textContent = "Start guessing";
});
