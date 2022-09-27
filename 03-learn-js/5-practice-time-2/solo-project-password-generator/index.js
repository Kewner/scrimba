const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z",];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`","!","@","#","$","%","^","&","*","(",")","_","-",
                "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let passwordLengthEl = document.getElementById("password-length");
let includeNumbersEl = document.getElementById("include-numbers");
let includeSymbolsEl = document.getElementById("include-symbols");

function setPasswords() {
  const length = passwordLengthEl.value;

  const includeNums = includeNumbersEl.checked;
  const includeSymbs = includeSymbolsEl.checked;

  passwordOneEl.textContent = generatePassword(length, includeNums, includeSymbs);
  passwordTwoEl.textContent = generatePassword(length, includeNums, includeSymbs);
}

function generatePassword(passwordLength, includeNums, includeSymbs) {
  let lengthWarning = document.getElementById("length-warning");

  if (passwordLength < 8 || passwordLength > 15) {
    lengthWarning.textContent = "please select a length of 8-15 characters";
    return;
  }

  lengthWarning.textContent = "";
  let password = '';
  let characters = [];

  if (includeNums && includeSymbs) {
    characters = letters.concat(numbers, symbols);
  } else if (includeNums) {
    characters = letters.concat(numbers);
  } else if (includeSymbs) {
    characters = letters.concat(symbols);
  } else {
    characters = letters;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIdx = Math.floor((Math.random() * characters.length));
    password += characters[randomIdx];
  }

  return password;
}

// copy password when clicking anywhere inside password container div
function copyToClipboard(pass) {
  if (pass === 'passOne') {
    navigator.clipboard.writeText(passwordOneEl.textContent);
  } else if (pass === 'passTwo') {
    navigator.clipboard.writeText(passwordTwoEl.textContent);
  }  
}

// The code below does the same, but by using addEventListener, which
// is necessary whenever we need to attach more than one event to an element.

// const passContainerOne = document.getElementById('pass-container-one');

// passContainerOne.addEventListener('click', () => {
//   navigator.clipboard.writeText(passwordOneEl.textContent);
// });

// const passContainerTwo = document.getElementById('pass-container-two');

// passContainerTwo.addEventListener('click', () => {
//   navigator.clipboard.writeText(passwordTwoEl.textContent);
// });