// Countdown Timer


// Wish Generator
const wishes = [
    "May this year bring you success and happiness ✨",
    "New year, new opportunities 🚀",
    "Believe in yourself and achieve greatness 💪",
    "Health, wealth, and happiness in 2026 🌟",
    "Make this year your best one yet 🎯"
];

function generateWish() {
    const random = Math.floor(Math.random() * wishes.length);
    document.getElementById("wishText").innerText = wishes[random];
}

// Resolutions
function addResolution() {
    const input = document.getElementById("resolutionInput");
    if (input.value === "") return;

    const li = document.createElement("li");
    li.innerText = input.value;
    document.getElementById("resolutionList").appendChild(li);

    input.value = "";
}
