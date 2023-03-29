/*
 * Implement all your JavaScript in this file!
 */

// Define input field for displaying result
const display = document.getElementById("display");

// Define number and operation buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button0");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const clearButton = document.getElementById("clearButton");
const equalsButton = document.getElementById("equalsButton");

// Define onclick events for buttons
button1.onclick = function() {
display.value += "1";
}

button2.onclick = function() {
display.value += "2";
}

button3.onclick = function() {
display.value += "3";
}

button4.onclick = function() {
display.value += "4";
}

button5.onclick = function() {
display.value += "5";
}

button6.onclick = function() {
display.value += "6";
}

button7.onclick = function() {
display.value += "7";
}

button8.onclick = function() {
display.value += "8";
}

button9.onclick = function() {
display.value += "9";
}

button0.onclick = function() {
display.value += "0";
}

addButton.onclick = function() {
display.value += "+";
}

subtractButton.onclick = function() {
display.value += "-";
}

multiplyButton.onclick = function() {
display.value += "*";
}

divideButton.onclick = function() {
display.value += "/";
}

clearButton.onclick = function() {
display.value = "";
}

equalsButton.onclick = function() {
display.value = eval(display.value);
}