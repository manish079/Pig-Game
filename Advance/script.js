let total_score, activePlayer, isPlaying, scores, winning_score;

init();

document.querySelector(".a").style.color = "#eb4d4d";

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (isPlaying) {
    let dice_num_1 = Math.floor(Math.random() * 6 + 1);
    let dice_num_2 = Math.floor(Math.random() * 6 + 1);

    let get_dice_1 = `dice-${dice_num_1}.png`;
    let get_dice_2 = `dice-${dice_num_2}.png`;

    document
      .querySelector(".dice-1")
      .setAttribute("src", `../img/${get_dice_1}`);
    document
      .querySelector(".dice-2")
      .setAttribute("src", `../img/${get_dice_2}`);

    document.querySelector(".dice-1").style.display = "block";
    document.querySelector(".dice-2").style.display = "block";

    //updating score
    if (dice_num_1 > 1 && dice_num_2 > 1) {
      total_score += dice_num_1 + dice_num_2;
      document.querySelector("#current-score-" + activePlayer).innerHTML =
        total_score;
    } else {
      switchPlayer();
    }
  }
});

//working functionality on hold button
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (isPlaying) {
    scores[activePlayer] += total_score;
    document.querySelector(`#score-${activePlayer}`).innerHTML =
      scores[activePlayer];

    winning_score = document.querySelector(".f-score").value;
    // console.log(winning_score); //Number

    //winning condition
    if (scores[activePlayer] >= winning_score) {
      document.querySelector(`#name-${activePlayer}`).textContent = "WINNER!";
      document
        .querySelector(`.player-${activePlayer}-box`)
        .classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}-box`)
        .classList.remove("active");
      document.querySelector(".dice-1").style.display = "none";
      document.querySelector(".dice-2").style.display = "none";

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

  document.querySelector(".dice-1").style.display = "none";
  document.querySelector(".dice-2").style.display = "none";
}

//Reset Game
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  total_score = 0;
  activePlayer = 0;
  isPlaying = true;
  scores = [0, 0];

  document.querySelector(".f-score").value = "";

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

  document.querySelector(".dice-1").style.display = "none";
  document.querySelector(".dice-2").style.display = "none";
}
