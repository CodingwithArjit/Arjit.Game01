let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const resultText = document.getElementById('result');

    if (userGuess == randomNumber) {
        resultText.textContent = 'Congratulations! You guessed the number!';
        resultText.style.color = 'green';
    } else if (userGuess > randomNumber) {
        resultText.textContent = 'Too high! Try again.';
        resultText.style.color = 'red';
    } else {
        resultText.textContent = 'Too low! Try again.';
        resultText.style.color = 'red';
    }
}
