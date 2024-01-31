// Powers
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");

// Pontuation
let pontuationPlayer = 0;
let pontuationComputer = 0;
const yourPontuation = document.querySelector("#your-pontuation");
const computerPontuation = document.querySelector("#computer-pontuation");

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
};

// Functions
const computerPlay = () => {
  const randPlay = Math.floor(Math.random() * 3 + 1);
  if (randPlay === 1) {
    return "rock";
  }
  if (randPlay === 2) {
    return "paper";
  }

  if (randPlay === 3) {
    return "scissor";
  }
};

const winOrLose = (result) => {
  if (result === "win") {
    pontuationPlayer++;
    yourPontuation.innerHTML = pontuationPlayer;
  } else {
    pontuationComputer++;
    computerPontuation.innerHTML = pontuationComputer;
  }
};

const sendPower = (power) => {
  const computer = computerPlay();

  console.log(computer);

  //   Draws
  if (power === computer) {
    result.innerHTML = "Você empatou com o computador!";
  } else if (
    (power === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSOR) ||
    (power === GAME_OPTIONS.PAPER && computer === GAME_OPTIONS.ROCK) ||
    (power === GAME_OPTIONS.SCISSOR && computer === GAME_OPTIONS.PAPER)
  ) {
    let playerGame = power
      .replace(GAME_OPTIONS.ROCK, "Pedra")
      .replace(GAME_OPTIONS.PAPER, "Papel")
      .replace(GAME_OPTIONS.SCISSOR, "Tesoura");

    result.innerHTML = `
    Você ganhou do computador! <br> 
    Você: ${playerGame} <br> 
    Computador: ${computer
      .replace("rock", "Pedra")
      .replace("paper", "Papel")
      .replace("scissor", "Tesoura")}`;
    winOrLose("win");
  } else {
    let playerGame = power
      .replace(GAME_OPTIONS.ROCK, "Pedra")
      .replace(GAME_OPTIONS.PAPER, "Papel")
      .replace(GAME_OPTIONS.SCISSOR, "Tesoura");

    result.innerHTML = `Você perdeu para o computador! <br> 
    Você: ${playerGame} <br> 
    Computador: ${computer
      .replace("rock", "Pedra")
      .replace("paper", "Papel")
      .replace("scissor", "Tesoura")}`;
    winOrLose("lose");
  }
};

// Events
rock.addEventListener("click", () => sendPower(GAME_OPTIONS.ROCK));
paper.addEventListener("click", () => sendPower(GAME_OPTIONS.PAPER));
scissor.addEventListener("click", () => sendPower(GAME_OPTIONS.SCISSOR));
