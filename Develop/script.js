// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input

function writePassword() {
  //values
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()_+";
  var numeric = "1234567890";
  // prompt variables, what are we asking from the user?
  var passwordLength = prompt("How many characters are in your password? Choose between 8 and 128");
  // length prompt, need to write code to determine the response is between 8 & 128 and give a response
      if (passwordLength >= 8 && passwordLength <= 128) { 
        alert("You've selected " + passwordLength + " characters for your password");
      } else {
        alert("Please select a number between 8 and 128");
      }
  console.log(passwordLength);

  // condensed passwordLength
  var length = Number(passwordLength);
  console.log(length);

  // Password characters criteria
  var type1 = confirm("Do you want special characters?");
      console.log(type1);
  var type2 = confirm("Do you want numeric characters?");
      console.log(type2);
  var type3 = confirm("Do you want lowercase characters?");
      console.log(type3);
  var type4 = confirm("Do you want uppercase characters?");
      console.log(type4);

  // my attempt at linking the confirmations to the corresponding values
  function combinePass() {

    if (type1 === false && type2 === false && type3 === false && type4 === false && length === null) {
      alert("Error: Please select at least one character type");
    } 
    if (type1 = true) {
      type1 = special;
    }
    if (type2 = true) {
      type2 = numeric;
        }
    if (type3 = true) {
      type3 = lowercase;
        }
    if (type4 = true) {
      type4 = uppercase;
    }
  }
  combinePass();
  console.log(combinePass);
  console.log(type1, type2, type3, type4);
  var passWord = "";
  var bank = (type1 + type2 + type3 + type4);
  function generatePassword() {
    // used while loop instead of for
    while (passWord.length < length) {
      passWord += bank[Math.floor(Math.random() * bank.length)];
    }
    console.log(passWord); 
  }
  generatePassword();
  // this code should change the text in the box to the newly generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = passWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
