// Rock paper Scissor

// for to generate random value to play with the computer
function computer() {
  let comChance;
  let random = Math.ceil(Math.random() * 3);
  if (random == 1) comChance = "rock";
  if (random == 2) comChance = "paper";
  if (random == 3) comChance = "scissor";
  return comChance;
}
function rpc(user) {
    console.log("starting the game");
   let computers = computer();
  if (user == "rock" && computers == "rock") return "draw";
  else if (user == "rock" && computers == "paper") return "user Won";
  else if (user == "rock" && computers == "scissor") return "computer won";
  else if (user == "paper" && computers == "rock") return "user won";
  else if (user == "paper" && computers == "paper") return "draw";
  else if (user == "paper" && computers == "scissor") return "computer won";
  else if (user == "scissor" && computers == "scissor") return "draw";
  else if (user == "scissor" && computers == "rock") return "computer won";
  else if (user == "scissor" && computers == "paper") return "user won";
}

console.log(rpc("rock"));