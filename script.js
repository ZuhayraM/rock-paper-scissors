var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const options = ["rock", "paper", "scissors"];
let modalQ = document.getElementById("questions");
let cpu = document.getElementById("cpu");
let userText = document.getElementById("user");
const result = document.getElementById("results");
let user = userText.innerText;
const userName = document.getElementById("user-name");
const userMove = document.getElementById("move");
const checkNameBtn = document.getElementById("check-name-btn");
const playMoveBtn = document.getElementById("play-btn");
const startGame = document.getElementById("show-modal");
const lineBr = document.getElementById("line-break");

window.onload = function start() {
    // startGame.onclick = () => {
    modal.style.display = "block";
    modalQ.innerText = "Hi there! What's your name?";
    userMove.value = "";
    userName.value = "";
};
// };

checkNameBtn.onclick = () => {
    const name = userName.value;    
    if (name.length === 0) {
        modalQ.innerText = "Please enter your name!";
        setTimeout(start(), 1000);
    } else if (name.length > 10) {
        modalQ.innerText = "Your name can't be greater than 10 letters surely!";
        setTimeout(start(), 1000);
    } else if (/[^\w\s_-]+|\d+/gi.test(name)) {
        modalQ.innerText = "Surely your name can't have any special characters or numbers!";
        setTimeout(star(), 1000);
    } else {
        modalQ.innerText = `Hi ${name}! Let's play Rock, Paper, Scissors together!`;
        setTimeout(() => {
            modalQ.innerText = "Enter your move.";
            // userName.style.display = "none"; 
            userName.remove();
            userMove.style.display = "inline-block"; 
            userName.value = "";  
            // checkNameBtn.style.display = "none"; 
            checkNameBtn.remove();
            playMoveBtn.style.display = "inline-block";
        }, 2000); 
    }
    lineBr.style.display = "none";
};

const determineWinner = async function(userMove, cpuMove, result) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (userMove === cpuMove) {
                result.textContent = "It's a tie.";
            } else {
                const winConditions = {
                    "rock": "scissors",
                    "scissors": "paper",
                    "paper": "rock"
                };
                if (winConditions[userMove] === cpuMove) {
                    result.textContent = `You win!`;
                } else {
                    result.textContent = "Computer wins.";
                }
            }
            resolve();
        }, 500); 
    });
};

playMoveBtn.onclick = async () => {
   modal.style.display = "none";
   const userMoveValue = userMove.value.toLowerCase().trim();
   const cpuMoveValue = options[Math.floor(Math.random() * options.length)];

   userText.innerText = "your " + userMoveValue;
   cpu.innerText = "Computer's " + cpuMoveValue;
   startGame.innerHTML = "Play again";

   document.getElementById("vs").style.display = "inline-block";
   document.getElementById("show-modal").style.display = "block";

   await determineWinner(userMoveValue, cpuMoveValue, result);
};

startGame.onclick = () => {
    modal.style.display = "block";
    userMove.value = "";
    document.getElementById("show-modal").style.display = "none";
    document.getElementById("vs").style.display = "none";
    result.textContent = "";
    userText.innerText = "";
    cpu.innerText = "";
};

span.onclick = () => {
    modal.style.display = "none";
    document.getElementById("show-modal").style.display = "block";
};