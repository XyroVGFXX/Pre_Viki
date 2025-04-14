const messages = [
    "Si silnejší, ako si myslíš! 💪",
    "Každý deň je nová šanca. 🌅",
    "Ver si – ideš to zvládnuť! ✨",
    "Nie si v tom sama. 🤗",
    "Aj malé kroky vedú k cieľu. 🚶‍♀️",
    "Dnes ťa niečo krásne prekvapí! 🌈",
    "Chyby ťa posúvajú vpred, nie späť. 🔄"
];

const feelBadBtn = document.getElementById('feelBadBtn');
const messageEl = document.getElementById('message');

// Funkcia na náhodnú správu
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Po kliknutí zobraz správu
feelBadBtn.addEventListener('click', () => {
    messageEl.textContent = getRandomMessage();
});