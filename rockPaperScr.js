let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerText = "Bruhh , Same choice 🥴 ";
  msg.style.backgroundColor = "red";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = ` Yeah 🤩 , You win ! your ${userChoice} beats ${comChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Ohh 😬 , You lost ! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "orange";
  }
};

const genComChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIndx = Math.floor(Math.random() * 3);
  return option[randIndx];
};

const playGame = (userChoice) => {
  console.log(`user choice is = ${userChoice}`);
  const comChoice = genComChoice();
  console.log(`comp choice is = ${comChoice}`);

  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissor" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
