// const dice = document.querySelector(".dice");
// const roll_dice = document.querySelector(".btn-roll");
// const hold = document.querySelector(".btn-hold");
// const new_game = document.querySelector(".btn-new");

// let score_0 = (document.querySelector("#score-0").innerHTML = 0);
// let score_1 = (document.querySelector("#score-1").innerHTML = 0);

// let curr_player_sc_0 = (document.querySelector(
//   "#current-score-0"
// ).innerHTML = 0);

// let curr_player_sc_1 = (document.querySelector(
//   "#current-score-1"
// ).innerHTML = 0);

// const name_0 = document.querySelector("#name-0");
// const name_1 = document.querySelector("#name-1");

// document.querySelector(".dice").style.display = "none";

let total_score, activePlayer, isPlaying, scores;

init();

document.querySelector(".b").style.color = "#eb4d4d";

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (isPlaying) {
    let dice_num = Math.floor(Math.random() * 6 + 1);

    let get_dice = `dice-${dice_num}.png`;

    document.querySelector(".dice").setAttribute("src", `../img/${get_dice}`);

    document.querySelector(".dice").style.display = "block";

    //updating score
    if (dice_num > 1) {
      total_score += dice_num;
      document.querySelector("#current-score-" + activePlayer).innerHTML =
        total_score;
    } else {
      switchPlayer();
    }
  }
});

// let score1 = 0,
//   score2 = 0;

//working functionality on hold button
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (isPlaying) {
    // if (activePlayer == 0) {
    //   score1 = curr_score;
    //   document.querySelector("#score-0").innerHTML = score1;
    // } else {
    //   score2 += curr_score;
    //   document.querySelector("#score-1").innerHTML = score2;
    // }

    scores[activePlayer] += total_score;
    document.querySelector(`#score-${activePlayer}`).innerHTML =
      scores[activePlayer];

    //winning condition
    if (scores[activePlayer] >= 30) {
      document.querySelector(`#name-${activePlayer}`).textContent = "WINNER!";
      document
        .querySelector(`.player-${activePlayer}-box`)
        .classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}-box`)
        .classList.remove("active");
      document.querySelector(".dice").style.display = "none";

      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  total_score = 0;

  document.querySelector("#current-score-0").textContent = 0;
  document.querySelector("#current-score-1").textContent = 0;

  //changing design of active player
  document.querySelector(`.player-0-box`).classList.toggle("active");

  document.querySelector(`.player-1-box`).classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

//Reset Game
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  total_score = 0;
  activePlayer = 0;
  isPlaying = true;
  scores = [0, 0];

  document.querySelector("#score-0").innerHTML = 0;
  document.querySelector("#score-1").innerHTML = 0;

  document.querySelector("#current-score-0").innerHTML = 0;
  document.querySelector("#current-score-1").innerHTML = 0;

  document.querySelector(".player-0-box").classList.remove("winner");
  document.querySelector(".player-1-box").classList.remove("winner");

  document.querySelector(`#name-0`).textContent = "Player-1";
  document.querySelector(`#name-1`).textContent = "Player-2";

  document.querySelector(".player-0-box").classList.remove("active");
  document.querySelector(".player-0-box").classList.remove("active");
  document.querySelector(".player-0-box").classList.remove("winner");

  //In starting player 0 has active
  document.querySelector(".player-0-box").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}
