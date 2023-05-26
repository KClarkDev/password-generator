////////////////////////////////////////////////////
//////////////////GLOBAL VARIABLES//////////////////
////////////////////////////////////////////////////

// array of valid characters to be used in the password
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '(', ')', '*', '+', '_'];

var passwordLengthInput = document.querySelector("#passwordLength");

var passwordLength = passwordLengthInput.value;

/////////////////////////////////////////////
//////////////////FUNCTIONS//////////////////
/////////////////////////////////////////////

function getRandomChar(arr) {

  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  return arr[randomIndex];
}

// // calls the getRandomChar() function and returns a string of random characters that has the length of the passwordLength variable
// function generatePassword(passLength) {
//   var userPassword = '';

//   for (var i=0; i < passLength; i++) {
//     var character = getRandomChar(characters); //references global array
//     userPassword = userPassword.concat(character);
//   }
//   return userPassword;
// }

function generatePassword() {
  var passwordForm = document.getElementById("passwordForm");
  var passwordLength = parseInt(passwordForm.elements.passwordLength.value);
  var charTypeElements = passwordForm.elements.charType;

  var selectedCharTypes = []; // Array to store selected character types

  for (var i = 0; i < charTypeElements.length; i++) {
    if (charTypeElements[i].checked) {
      selectedCharTypes.push(charTypeElements[i].value);
    }
  }

  console.log(selectedCharTypes)

  // Define character sets based on selected character types
  var characterSets = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Numeric: "0123456789",
    Special: "!@#$%^&*()"
  };

  // Combine selected character sets into a single string
  var characters = selectedCharTypes.reduce(function(acc, charType) {
    return acc + characterSets[charType];
  }, "");

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters.charAt(randomIndex);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}

// // Write password to the #password input
// function writePassword() {
//   var passwordLength = passwordLengthInput.value; // Get the value of the input field
//   var password = generatePassword(parseInt(passwordLength)); // Convert the value to an integer
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

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

///////////////////////////////////////////////////
//////////////////EVENT LISTENERS//////////////////
///////////////////////////////////////////////////

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Get references to the #copyButton element
var copyButton = document.querySelector("#copyButton");
// Add event listener to copy button
copyButton.addEventListener("click", copyPasswordToClipboard);
