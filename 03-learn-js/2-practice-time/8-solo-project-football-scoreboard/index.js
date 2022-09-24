let homeGoals = document.getElementById("home-goals");
let homeFouls = document.getElementById("home-fouls");
let homePenalties = document.getElementById("home-penalties");

let guestGoals = document.getElementById("guest-goals");
let guestFouls = document.getElementById("guest-fouls");
let guestPenalties = document.getElementById("guest-penalties");

function newGame() {
  homeGoals.textContent = 0;
  homeFouls.textContent = 0;
  homePenalties.textContent = 0;
  guestGoals.textContent = 0;
  guestFouls.textContent = 0;
  guestPenalties.textContent = 0;
}

function highlightLeader() {
  let homeScore = Number(homeGoals.textContent);
  let guestScore = Number(guestGoals.textContent);

  if (homeScore > guestScore) {
    // make 'HOME' light up
  } else if (guestScore > homeScore) {
    // make 'GUEST' light up
  }
}

function addHomeGoal() {
  // highlightLeader();
  homeGoals.textContent = Number(homeGoals.textContent) + 1;
}

function addHomeFoul() {
  homeFouls.textContent = Number(homeFouls.textContent) + 1;
}

function addHomePenalty() {
  homePenalties.textContent = Number(homePenalties.textContent) + 1;
}

function addGuestGoal() {
  // highlightLeader();
  guestGoals.textContent = Number(guestGoals.textContent) + 1;
}

function addGuestFoul() {
  guestFouls.textContent = Number(guestFouls.textContent) + 1;
}

function addGuestPenalty() {
  guestPenalties.textContent = Number(guestPenalties.textContent) + 1;
}