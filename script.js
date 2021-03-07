// Assignment Code
var generateBtn = document.querySelector("#generate");

// establishes variables that will be combined below for the randomize function to draw from
var charSet = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// gets password criteria from user, starting with length
// if length is outside the desired range, it loops around and asks again
function generatePassword() {
  window.charNum = prompt("How many characters does your password need?", "min. 8 - max. 128")

  while (charNum == "" || charNum < 8 || charNum > 128) {
    alert("Error: please enter a number from 8 to 128")
    window.charNum = prompt("How many characters does your password need?", "min. 8 - max. 128")
  }

// these confirms build the string the randomize function will pull from
  if (confirm("Should it include lowercase letters?")) {
    charSet += lowercase;
  } 
  if (confirm("Include uppercase letters?")) {
    charSet += uppercase;
  }
  if (confirm("Include numbers?")) {
    charSet += numbers;
  }
  if (confirm("Include special characters?")) {
    charSet += specialCharacters;
  }

  //validates input - if nothig is selected above, error message displays
  if (charSet == "") {
    alert("Error: password must contain letters, numbers, or special characters")
  }

  //generates random string using input above - for loop runs through the 
  // string established above until the new string is the desired length
  function randomize(length) {
    window.result = "";
    for (var i = 0; i < charNum; i++) {
      result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return result;
  }

  randomize(charNum);

// resets the string to start from scratch without reloading
  charSet = "";
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password = result;
  passwordText.value = password;
  


}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);








