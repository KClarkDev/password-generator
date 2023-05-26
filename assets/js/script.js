// array of valid characters to be used in the password
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '(', ')', '*', '+', '_'];

// TODO: add validation
// var passwordLength = prompt("How many characters do you want in the password? (must be between 8 and 128 characters)");

var passwordLengthInput = document.querySelector("#passwordLength");

var passwordLength = passwordLengthInput.value;

console.log(passwordLengthInput);
console.log(passwordLength);


function getRandomChar(arr) {

  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  return arr[randomIndex];
}

// calls the getRandomChar() function and returns a string of random characters that has the length of the passwordLength variable
function generatePassword(passLength) {
  var userPassword = '';

  for (var i=0; i < passLength; i++) {
    var character = getRandomChar(characters); //references global array
    userPassword = userPassword.concat(character);
  }

  // console.log(userPassword); // for testing
  return userPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = passwordLengthInput.value; // Get the value of the input field
  var password = generatePassword(parseInt(passwordLength)); // Parse the value to an integer
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to copy password to clipboard
function copyPasswordToClipboard() {
  var passwordText = document.querySelector("#password");
  passwordText.select();
  navigator.clipboard.writeText(passwordText.value)
    .then(function() {
      alert("Password copied to clipboard!");
    })
    .catch(function(error) {
      console.error("Failed to copy password: ", error);
    });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
var copyButton = document.querySelector("#copyButton");
copyButton.addEventListener("click", copyPasswordToClipboard);
