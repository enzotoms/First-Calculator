const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
    if(btn.id === '=') {
        display.value = eval(display.value);
        } else if(btn.id === "ac"){
        display.value = "";
    }else if (btn.id == "de") {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += btn.id;
    }
});
});


// Function to calculate the square root of the displayed value
function calculateSquareRoot() {
    var display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

// Function to calculate the logarithm of the displayed value
function calculateLog() {
    var display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.log10(parseFloat(display.value));
    }
}

// Function to calculate the sine of the displayed value
function calculateSin() {
    var display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.sin(parseFloat(display.value));
    }
}

// Function to calculate the cosine of the displayed value
function calculateCos() {
    var display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.cos10(parseFloat(display.value));
    }
}

// Function to handle number button clicks
function handleNumberClick(buttonId) {
    var display = document.getElementById("display");
    display.value += document.getElementById(buttonId).textContent;
}

// Function to handle operator button clicks
function handleOperatorClick(buttonId) {
    var display = document.getElementById("display");
    var operator = document.getElementById(buttonId).textContent;

    if (operator === "=") {
        display.value = eval(display.value);
    } else {
        display.value += operator;
    }
}

// Function to clear the display
function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculate percentage
function calculatePercentage() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value / 100;
    }
}