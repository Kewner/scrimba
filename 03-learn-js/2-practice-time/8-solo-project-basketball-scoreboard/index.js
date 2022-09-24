let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function plusOneHome() {
  homeScore.textContent = Number(homeScore.textContent) + 1;
}

function plusTwoHome() {
  homeScore.textContent = Number(homeScore.textContent) + 2;
}

function plusThreeHome() {
  homeScore.textContent = Number(homeScore.textContent) + 3;
}

function plusOneGuest() {
  guestScore.textContent = Number(guestScore.textContent) + 1;
}

function plusTwoGuest() {
  guestScore.textContent = Number(guestScore.textContent) + 2;
}

function plusThreeGuest() {
  guestScore.textContent = Number(guestScore.textContent) + 3;
}