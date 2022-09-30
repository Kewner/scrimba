const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('input');
const lengthResult = document.getElementById('length');
const volumeResult = document.getElementById('volume');
const massResult = document.getElementById('mass');

convertBtn.addEventListener('click', function() {
  const input = inputEl.value;
  renderLength(input);
  renderVolume(input);
  renderMass(input);
});

function renderLength(num) {
  const feet = metersToFeet(num);
  const meters = feetToMeters(num);
  let result = `<p>${num} meters = ${feet} feet | ${num} feet = ${meters} meters</p>`;
  lengthResult.innerHTML += result;
}

function renderVolume(num) {
  const gallons = litersToGallons(num);
  const liters = gallonsToLiters(num);
  let result = `<p>${num} liters = ${gallons} | ${num} gallons = ${liters}</p>`;
  volumeResult.innerHTML += result;
}

function renderMass(num) {
  const pounds = kilosToPounds(num);
  const kilos = poundsToKilos(num);
  let result = `<p>${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos</p>`;
  massResult.innerHTML += result;
}

const metersToFeet = num => (num * 3.281).toFixed(3);
const feetToMeters = num => (num / 3.281).toFixed(3);
const litersToGallons = num => (num * 0.264).toFixed(3);
const gallonsToLiters = num => (num / 0.264).toFixed(3);
const kilosToPounds = num => (num * 2.204).toFixed(3);
const poundsToKilos = num => (num / 2.204).toFixed(3);