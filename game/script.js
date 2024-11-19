// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to elements
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");

// Function to handle user guesses
checkButton.onclick = () => {
    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = "Enter a number between 1 and 100.";
        result.style.color = "red";
    } else if (guess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed it!";
        result.style.color = "green";
        checkButton.disabled = true;
        restartButton.style.display = "block";
    } else {
        result.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
        result.style.color = "orange";
    }

    guessInput.value = ""; // Clear input
    guessInput.focus();   // Refocus input
};

// Function to restart the game
restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    checkButton.disabled = false;
    restartButton.style.display = "none";
    guessInput.focus();
};
