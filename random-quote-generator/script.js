// Array to Store a List of Quotes and Author
const quotes = [
    {text: "You're my one and only", author: "Alisa Mikhailovna Kujou"},
    {text: "This world is cruel... and yet, so beautiful", author: "Mikasa Ackerman"},
    {text: "I want to know what 'i love u' means", author: "Violet Evergarden"},
    {text: "Who wouldn't want to help someone in their time of need?", author: "Sylvia Lyyneheym"},
    {text: "I think i've finally found a reason to live... and it's you, Darling", author: "Zero Two"},
    {text: "I want to be strong enough that no one ever has to cry because of me again", author: "Emilia"},
    {text: "Even if it's all an act... these feelings right now are definitely real", author: "Chizuru Mizuhara"}
];

// Get HTML Element by ID
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Function to Generate a Anime Quote
function generateQuote() {
    // Get a Random Index from Quotes Array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the Quote and Author
    quoteText.textContent = `"${randomQuote.text}"`
    quoteAuthor.textContent = `- ${randomQuote.author}`
}

// Add Event Listener to Button
newQuoteButton.addEventListener('click', generateQuote);

// Generate a Quote on a Load
generateQuote()