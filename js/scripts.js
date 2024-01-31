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

// Functions

const computerPlay = () => {
  const randPlay = Math.floor(Math.random() * 3 + 1);
  if (randPlay === 1) {
    return "Pedra";
  }

  if (randPlay === 2) {
    return "Papel";
  }

  if (randPlay === 3) {
    return "Tesoura";
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

  //   Draws
  if (power === computer) {
    result.innerHTML = "Você empatou com o computador!";
  } else if (
    (power === "rock" && computer === "Tesoura") ||
    (power === "paper" && computer === "Pedra") ||
    (power === "scissor" && computer === "Papel")
  ) {
    let playerGame = power
      .replace("rock", "Pedra")
      .replace("paper", "Papel")
      .replace("scissor", "Tesoura");

    result.innerHTML = `
    Você ganhou do computador! <br> 
    Você: ${playerGame} <br> 
    Computador: ${computer}`;
    winOrLose("win");
  } else {
    let playerGame = power
      .replace("rock", "Pedra")
      .replace("paper", "Papel")
      .replace("scissor", "Tesoura");

    result.innerHTML = `Você perdeu para o computador! <br> 
    Você: ${playerGame} <br> 
    Computador: ${computer}`;
    winOrLose("lose");
  }
};

// Events
rock.addEventListener("click", () => sendPower("rock"));
paper.addEventListener("click", () => sendPower("paper"));
scissor.addEventListener("click", () => sendPower("scissor"));
