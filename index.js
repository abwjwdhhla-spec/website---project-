
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const greeting = document.getElementById("greeting");
const timer = document.getElementById("timer");
const colorBox = document.getElementById("colorBox");
const finalMessage = document.getElementById("finalMessage");

let count = 5;
let interval;

const colors = ["red", "yellow", "green","brown", "purple"];

startBtn.addEventListener("click", function () {

    // Prevent multiple timers
    if (interval) {
        return;
    }

    const name = nameInput.value.trim().toUpperCase();

    if (name === "") {
        greeting.textContent = "Please enter your name!";
        return;
    }

    greeting.textContent = "Hello " + name;

    count = 5;
    timer.textContent = count;
    finalMessage.textContent = "";

    let colorIndex = 0;

    interval = setInterval(function () {

        count--;

        timer.textContent = count;

        colorBox.style.backgroundColor =
            colors[colorIndex];

        colorIndex = (colorIndex + 1) % colors.length;

        if (count === 0) {
            clearInterval(interval);
            interval = null;
            finalMessage.textContent = "Finished!";
        }

    }, 1000);

});