//Bot variable
let botOption;
let userOption;
let winner = false;
let loser = 0;

//Audio Files
// let winnerAudio = new Audio('sound/hahaha.mp3');
let loserAudio = new Audio("sound/bazinga.mp3");

//Bot Selects Random Option
let randomItem = (items) => {
  return (botOption = items[Math.floor(Math.random() * items.length)]);
};

//Bot Options
let items = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];

//User Wins outcomes
let result = (userOption) => {
  if (userOption === "Rock" && randomItem(items) === "Scissor") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Scissor" && randomItem(items) === "Paper") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Paper" && randomItem(items) === "Rock") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Rock" && randomItem(items) === "Lizard") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Lizard" && randomItem(items) === "Spock") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Spock" && randomItem(items) === "Scissor") {
    loser = false;
  } else {
    message();
  }
  if (userOption === "Scissor" && randomItem(items) === "Lizard") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Lizard" && randomItem(items) === "Paper") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Paper" && randomItem(items) === "Spock") {
    loser = false;
    message();
  } else {
    message();
  }
  if (userOption === "Spock" && randomItem(items) === "Rock") {
    loser = false;
    message();
  } else {
    message();
  }

  if (randomItem(items) === "Rock" && userOption === "Scissor") {
    loser = true;
    message();
  } else if (randomItem(items) === "Scissor" && userOption === "Paper") {
    loser = true;
    message();
  } else if (randomItem(items) === "Paper" && userOption === "Rock") {
    loser = true;
    message();
  } else if (randomItem(items) === "Rock" && userOption === "Lizard") {
    loser = true;
    message();
  } else if (randomItem(items) === "Lizard" && userOption === "Spock") {
    loser = true;
    message();
  } else if (randomItem(items) === "Spock" && userOption === "Scissor") {
    loser = true;
    message();
  } else if (randomItem(items) === "Scissor" && userOption === "Lizard") {
    loser = true;
    message();
  } else if (randomItem(items) === "Lizard" && userOption === "Paper") {
    loser = true;
    message();
  } else if (randomItem(items) === "Paper" && userOption === "Spock") {
    loser = true;
    message();
  } else if (randomItem(items) === "Spock" && userOption === "Rock") {
    loser = true;
    message();
  }

  //Match message
  function message() {
    if (loser === true) {
      document.getElementById(
        "matchOutcome"
      ).innerHTML = `<h1 style="color: red;" >YOU LOSE. ${botOption} BEATS ${userOption}</h1> `;
      loserAudio.play();
    } else {
      document.getElementById(
        "matchOutcome"
      ).innerHTML = `<h1 style="color: green;" >YOU WIN. ${userOption} BEATS ${botOption}</h1> `;
      // winnerAudio.play();
    }
  }
};
//Clear the Game
function clearAnswer() {
  document.getElementById("matchOutcome").innerHTML = "";
}
