const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const decBtn = document.getElementById("decBtn");
const counterLabel = document.getElementById("counterLabel");

let counter = 0;

document.getElementById("incBtn").onclick = function() {
    counter++;
    counterLabel.textContent = counter;
}

document.getElementById("decBtn").onclick = function() {
    counter--;
    counterLabel.textContent = counter;
}

document.getElementById("resetBtn").onclick = function() {
    counter = 0;
    counterLabel.textContent = counter;
}