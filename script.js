// Assignment Code
var generateBtn = document.querySelector("#generate");

var charNum;
var charSet = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function setUp() {
var charNum = prompt("How many characters does your password need?", "min. 8 - max. 128")
if (charNum == null || charNum == "" || charNum < 8 || charNum > 128) {
  alert("Error: please enter a number from 8 to 128")
  var charNum = prompt("How many characters does your password need?", "min. 8 - max. 128")
} 

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
if (charSet == "") {
  alert("Error: password must contain letters, numbers, or special characters")
}
console.log(charSet);
}

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", setUp, writePassword);








