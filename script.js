// Array to hold calculation history
let history = [];

// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;  // Append the clicked button's value
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';  // Clear the display
}

// Function to delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);  // Remove the last character
}

// Function to calculate the result of the expression in the display
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        const result = eval(display.value);
        // Display the result
        display.value = result;
        // Add the calculation and result to the history
        addToHistory(display.value, result);
    } catch (error) {
        display.value = 'Error';  // Show error message for invalid expressions
    }
}

// Function to add a calculation and its result to the history
function addToHistory(input, output) {
    // Format the history entry as "Input = Output"
    const historyEntry = `${input} = ${output}`;
    history.push(historyEntry);  // Add the entry to the history array
    updateHistoryDisplay();  // Update the displayed history
}

// Function to update the history display
function updateHistoryDisplay() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';  // Clear current history display
    // Loop through the history array and create list items for each calculation
    history.forEach((calc) => {
        const li = document.createElement('li');  // Create a new list item
        li.textContent = calc;  // Set the text of the list item
        historyElement.appendChild(li);  // Append the list item to the history display
    });
}

// Function to clear the history
function clearHistory() {
    history = [];  // Reset the history array
    updateHistoryDisplay();  // Clear the history display
}
