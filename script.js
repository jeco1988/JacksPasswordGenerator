// variable for specialCharacters
var specialCharacters = "!@#$%^&*()";
var generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Creation of Write password function for #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Criteria Prompts
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be at least 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // The minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // No minimums for each criteria

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator function array
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // If statements to check boolean against function array

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the For Loop
  var randomPasswordGenerated = "";

  // Loop for random numbers
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // Adding variables to password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}