////////////////////////////////////////////////////
//////////////////GLOBAL VARIABLES//////////////////
////////////////////////////////////////////////////

var passwordLengthInput = document.querySelector("#passwordLength");

var passwordLength = passwordLengthInput.value;

/////////////////////////////////////////////
//////////////////FUNCTIONS//////////////////
/////////////////////////////////////////////

function generatePassword() {
  var passwordForm = document.getElementById("passwordForm"); // Get access to the form element in the HTML
  var passwordLength = parseInt(passwordForm.elements.passwordLength.value); // Access the password length input value and convert from text to integer
  var charTypeElements = passwordForm.elements.charType; // Get access to all the elements in the HTML with "name" equal to "charType". This returns a NodeList (represents a collection of nodes (elements) in the document order. You can access individual elements from the collection using their index, similar to an array.)

  var selectedCharTypes = []; // Array to store selected character types

  // Iterate through the charType nodeList. If the value is checked, add the charType to the selectedCharTypes array.
  for (var i = 0; i < charTypeElements.length; i++) {
    if (charTypeElements[i].checked) {
      selectedCharTypes.push(charTypeElements[i].value);
    }
  }

  // Define character sets based on selected character types
  var characterSets = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Numeric: "0123456789",
    Special: "!@#$%^&*()"
  };

  // Combines the character sets based on the selected character types (selectedCharTypes) by reducing them into a single string using the reduce method.
  // NOTE FOR STUDY: This is a function expression - when a function is assigned to a variable or a property of an object
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

// Copies password to clipboard
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

function validateForm() {
  var form = document.querySelector('#passwordForm');
  var passwordLength = form.elements.passwordLength;
  var charTypeElements = passwordForm.elements.charType;
  var selectedCharTypes = []; // Array to store selected character types

  for (var i = 0; i < charTypeElements.length; i++) {
    if (charTypeElements[i].checked) {
      selectedCharTypes.push(charTypeElements[i].value);
    }
  }

  if (!form.checkValidity()) {
    // Display an alert for each field that is not valid
    var invalidFields = form.querySelectorAll(':invalid');
    invalidFields.forEach(function(field) {
      alert('Please fill in the ' + field.getAttribute('id') + ' field.');
    });
  }
  else if (selectedCharTypes.length === 0) {
    alert('Please select at least one character type.');
  }
}

///////////////////////////////////////////////////
//////////////////EVENT LISTENERS//////////////////
///////////////////////////////////////////////////

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", validateForm);
generateBtn.addEventListener("click", generatePassword);


// Get references to the #copyButton element
var copyButton = document.querySelector("#copyButton");
// Add event listener to copy button
copyButton.addEventListener("click", copyPasswordToClipboard);


///////////////////////////////////////////////////
//////////////////////ARCHIVE//////////////////////
///////////////////////////////////////////////////

// This code was removed from the final script since it was combined into another function. Keeping it in the file for notes/reference since this was an educational exercise.

// function getRandomChar(arr) {

//   // get random index value
//   var randomIndex = Math.floor(Math.random() * arr.length);

//   // get random item
//   return arr[randomIndex];
// }

// // calls the getRandomChar() function and returns a string of random characters that has the length of the passwordLength variable
// function generatePassword(passLength) {
//   var userPassword = '';

//   for (var i=0; i < passLength; i++) {
//     var character = getRandomChar(characters); //references global array
//     userPassword = userPassword.concat(character);
//   }
//   return userPassword;
// }

// // Write password to the #password input
// function writePassword() {
//   var passwordLength = passwordLengthInput.value; // Get the value of the input field
//   var password = generatePassword(parseInt(passwordLength)); // Convert the value to an integer
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }





