const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Krutiii please...",
    "Puranpoli Please.....!",
    "I will be very sad...",
    "I will take what is mine",
    "I promise to love you",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const images = [
    "./assets/1 (2).jpg",
    "./assets/1 (3).jpg",
    // "./assets/1 (4).jpg",
    "./assets/1 (5).jpg",
    // "./assets/1 (6).jpg",
    "./assets/1 (7).jpg",
    "./assets/1 (8).jpg",
    "./assets/1 (9).jpg",
    "./assets/1 (10).jpg",
    "./assets/1 (11).jpg",
    "./assets/1 (12).jpg",
    "./assets/1 (13).jpg",
    "./assets/1 (14).jpg",
    "./assets/1 (15).jpg",
    "./assets/1 (16).jpg",
    "./assets/1 (17).jpg",
    "./assets/1 (18).jpg",
    "./assets/1 (19).jpg",
    "./assets/1 (20).jpg",
    "./assets/1 (21).jpg",
    "./assets/1 (22).jpg",
    "./assets/1 (23).jpg",
    "./assets/1 (24).jpg",
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector(".gif_container img");

    // Change the text of the No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change the image
    gifImage.src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;

    // Increase the Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
