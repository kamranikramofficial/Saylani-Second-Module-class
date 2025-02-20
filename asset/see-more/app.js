let messageElement = document.getElementById('message');
let readMoreButton = document.getElementById('read-more-btn');
let currentIndex = 100;
let fullMessage = messageElement.textContent;
let words = fullMessage.split(" ");

function updateMessage() {
    if (currentIndex >= words.length) {
        messageElement.textContent = words.join(" ");
        readMoreButton.textContent = "See Less";
    } else {
        messageElement.textContent = words.slice(0, currentIndex).join(" ") + "...";
        readMoreButton.textContent = "See More";
    }
}

readMoreButton.addEventListener('click', function() {
    if (currentIndex >= words.length) {
        currentIndex = 100;
    } else {
        currentIndex += 100;
    }
    updateMessage();
});

updateMessage();