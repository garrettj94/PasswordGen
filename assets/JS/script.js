
  // Assignment Code
var generateBtn = document.querySelector("#generate");
const keys ={ 
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}


  // Write password to the #password input i added password length mid and max to the write function
var writePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  

  //the below starts after you click on genterate password. t
function generatePassword() {
  //this will ask how long you want the password to be
  var passwordLength = prompt("How many characters would you like?")
  //this sets the min and max amount of char you want
  var max_chars = 128;
  var min_chars = 8;
  // this is used to creat a varable that will manualy creat the password from the key array
  var empty=""; 
  // this is used to ask the user to set the amount of charcter they want in the password
  if(passwordLength > max_chars || passwordLength < min_chars) {
    alert("Please choose number between 8-128")
    return;
  }

  // this is used to ask the user if they want uppercase in the password
  var upperCase= confirm("would you like Upercase letters?")
  if(upperCase === true){
    empty+= keys.upperCase
  } 
  
  //  this is used to ask the user if they want lowercase in the password
  var lowerCase = confirm("would you like Lowercase letters?")
  if(lowerCase === true){
    empty+= keys.lowerCase
  } 
  //  this is used to ask the user if they want numbers in the password
  var number = confirm("would you like to add some numbers?")
  if(number === true){
    empty+= keys.number
  } 
  //  this is used to ask the user if they want symbols in the password
  var symbol = confirm("would you like to add specail characters?")
  if(symbol === true){
    empty+= keys.symbol
  } 
  console.log(empty)
  // this is used to creat a varable that will manualy creat the password from the key array 
  var final ="";

  // this is used to creat a loop that will pull form the key array 
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * empty.length);
    final += empty.charAt(randomNumber)
  }
  return final
  
}


