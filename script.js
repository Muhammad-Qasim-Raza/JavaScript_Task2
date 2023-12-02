// Prompt for user input
var userInput = prompt("Enter a word:");

// Convert the input to lowercase to make the comparison case-insensitive
var lowerCaseInput = userInput.toLowerCase();

// Reverse the input string
var reversedInput = lowerCaseInput.split('').reverse().join('');

// Check if the input is a palindrome
if (lowerCaseInput === reversedInput) {
  alert("The word '" + userInput + "' is a palindrome.");
} else {
  alert("The word '" + userInput + "' is not a palindrome.");
}
