// selecting elements
const btnAgain = document.querySelector(".btn-again");
const btnCheck = document.querySelector(".btn-check");
const secretNumberText = document.querySelector(".secret-number");
const guessingTxt = document.querySelector(".guessing-txt");
const scoreTxt = document.querySelector(".value-score");
const highScoreTxt = document.querySelector(".value-high-score");
let secretNumber;
let score = 20;
let highScore = 0;
let isPlaying = true;

// generate random secret number

secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);

// check input against secret number
btnCheck.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess-input").value);
  console.log(guessInput);
  if (isPlaying) {
    if (score > 0) {
      if (guessInput === secretNumber) {
        guessingTxt.textContent = "Correct!";
        secretNumberText.textContent = secretNumber;
        secretNumberText.classList.add("winner-class");
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
    } else if (score === 0) {
      scoreTxt.textContent = score;
      guessingTxt.textContent = "You lost the game!";
      secretNumberText.textContent = secretNumber;
      secretNumberText.classList.add("loser-class");
    }
  }
});
