let randomNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0
let minGuess = 1
let maxGuess = 100

// Get DOM elements
const guessInput = document.querySelector('#guessNumber')
const guessButton = document.querySelector('#guessButton')
const message = document.querySelector('#message')
const playAgainButton = document.querySelector('#playAgain')

function checkGuess() {
    const userGuess = Number(guessInput.value)
    // After each guess increment the attempts by 1
    attempts++

    if(userGuess === randomNumber) {
        message.textContent = `Yeay! You guessed the number in ${randomNumber} correctly in ${attempts} attempts`
        message.style.color = 'green'
        endGame()
    } else if(userGuess > randomNumber) {
        message.textContent = `Too High! Try again. Hint: ${minGuess} - ${userGuess}`
        message.style.color = 'red'
        maxGuess = userGuess - 1
    } else if(userGuess < randomNumber) {
        message.textContent = `Too low! Try again. Hint: ${userGuess} - ${maxGuess}`
        message.style.color = 'red'
        minGuess = userGuess + 1
    }

    guessInput.value = ''
    guessInput.focus()
}

function endGame() {
    guessInput.disabled = true
    guessButton.disabled = true
    playAgainButton.style.display = 'inline-flex'
}

function resetGame() {
    attempts = 0
    minGuess = 1
    maxGuess = 100
    randomNumber = Math.floor(Math.random() * 100) + 1
    guessInput.disabled = false
    guessButton.disabled = false
    message.textContent = 'Goodluck! Start Guessing . . .'
    message.style.color = 'rgb(78, 78, 78)'
    playAgainButton.style.display = 'none'
    guessInput.value = ''
    guessInput.focus()
}

guessButton.addEventListener('click', checkGuess)
playAgainButton.addEventListener('click', resetGame)
guessInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        checkGuess()
    }
})