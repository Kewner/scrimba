const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('input');
const lengthResults = document.getElementById('length-results');
const volumeResults = document.getElementById('volume-results');
const massResults = document.getElementById('mass-results');
const noInputWarning = document.getElementById('no-input-warning');

convertBtn.addEventListener('click', function() {
  clearAll();
  const input = inputEl.value;
  
  if (!input) {
    noInput();
    return;
  }

  renderLength(input);
  renderVolume(input);
  renderMass(input);
  clearInputEl();
});

const clearInputEl = () => inputEl.value = '';
const clearAll = () => {
  noInputWarning.textContent = '';
  lengthResults.innerHTML = '';
  volumeResults.innerHTML = '';
  massResults.innerHTML = '';
}

const noInput = () => {
  noInputWarning.textContent = 'Please type a number!';
}

function renderLength(num) {
  const feet = metersToFeet(num);
  const meters = feetToMeters(num);
  let result = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
  lengthResults.innerHTML += result;
}

function renderVolume(num) {
  const gallons = litersToGallons(num);
  const liters = gallonsToLiters(num);
  let result = `${num} liters = ${gallons} | ${num} gallons = ${liters}`;
  volumeResults.innerHTML += result;
}

function renderMass(num) {
  const pounds = kilosToPounds(num);
  const kilos = poundsToKilos(num);
  let result = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`;
  massResults.innerHTML += result;
}

const metersToFeet = num => (num * 3.281).toFixed(3);
const feetToMeters = num => (num / 3.281).toFixed(3);
const litersToGallons = num => (num * 0.264).toFixed(3);
const gallonsToLiters = num => (num / 0.264).toFixed(3);
const kilosToPounds = num => (num * 2.204).toFixed(3);
const poundsToKilos = num => (num / 2.204).toFixed(3);