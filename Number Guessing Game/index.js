const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attemptsDisplay");

guessButton.onclick = function () {
  let guess = Number(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = "❌ Please enter a valid number!";
    message.style.color = "#ff6666";
    return;
  }

  if (guess < minNum || guess > maxNum) {
    message.textContent = `⚠️ Number must be between ${minNum} and ${maxNum}.`;
    message.style.color = "#ffcc00";
    return;
  }

  attempts++;

  if (guess > answer) {
    message.textContent = "📈 Too high!";
    message.style.color = "#ffd700";
  } else if (guess < answer) {
    message.textContent = "📉 Too low!";
    message.style.color = "#add8e6";
  } else {
    message.textContent = `✅ Correct! The answer was ${answer}. You guessed it in ${attempts} attempts! 🎉`;
    message.style.color = "#90ee90";
    guessButton.disabled = true;
    guessInput.disabled = true;
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
  guessInput.focus();
};
