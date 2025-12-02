// Getting the HTML Element
const countdownElement = document.getElementById('countdown')
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const inputHours = document.getElementById('inputHours')
const inputMinutes = document.getElementById('inputMinutes')
const inputSeconds = document.getElementById('inputSeconds')
const startButton = document.getElementById('startButton')

// Variable Countdown Interval
let countdownInterval;

// Function to start the countdown
function startCountdown() {
    // Get the input values
    let hours = parseInt(inputHours.value) || 0
    let minutes = parseInt(inputMinutes.value) || 0
    let seconds = parseInt(inputSeconds.value) || 0

    // Calculate the total seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds

    // Check if the total seconds is valid
    if (totalSeconds <= 0) {
        alert('Please enter a valid time')
        return
    }

    // Clear input after the countdown starts
    inputHours.value = ''
    inputMinutes.value = ''
    inputSeconds.value = ''

    // Function to update the countdown display
    countdownInterval = setInterval( () => {
        // Calculate the remaining days, hours, minutes, and seconds
        const days = Math.floor(totalSeconds / 86400)
        const hours = Math.floor((totalSeconds % 86400) / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = Math.floor((totalSeconds % 60))

        // Update HTML Element Display
        daysElement.textContent = days.toString().padStart(2, '0')
        hoursElement.textContent = hours.toString().padStart(2, '0')
        minutesElement.textContent = minutes.toString().padStart(2, '0')
        secondsElement.textContent = seconds.toString().padStart(2, '0')

        // Decrease the total time by one seconds
        totalSeconds--

        // Stop the countdown when it reaches zero
        if (totalSeconds < 0) {
            clearInterval(countdownInterval)
            alert('Countdown finished')
        }
    }, 1000 // miliseconds
)
}

// Add Event Listener to Start Button
startButton.addEventListener('click', () => {
    // Stop any running countdown
    clearInterval(countdownInterval)
    // Start a new countdown
    startCountdown()
})