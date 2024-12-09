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


window.onload = () => {
    modal.style.display = "block";
    modalQ.innerText = "Hi there! What's your name?";
    userMove.value = "";
};

checkNameBtn.onclick = () => {
    const name = userName.value.trim();    

    if (name.length === 0) {
        alert("Name cannot be empty.");
    } else if (name.length > 10) {
        alert("Name cannot be longer than 10 characters.");
    } else if (/[^a-zA-Z]/.test(name)) {
        alert("Enter a valid name (only letters allowed, no numbers or special characters).");
    } else {
        modalQ.innerText = `Hi ${name}! Let's play!`;
        setTimeout(() => {
            modalQ.innerText = "Enter your move.";
            userName.style.display = "none"; 
            userMove.style.display = "inline-block"; 
            userName.value = "";  
            checkNameBtn.style.display = "none"; 
            playMoveBtn.style.display = "inline-block";
        }, 2000); 
    }
};

const determineWinner = async function(userMove, cpuMove, result) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Check if it's a tie
            if (userMove === cpuMove) {
                result.textContent = "It's a tie.";
            } else {
                const winConditions = {
                    "rock": "scissors",
                    "scissors": "paper",
                    "paper": "rock"
                };
                if (winConditions[userMove] === cpuMove) {
                    result.textContent = "Player wins!";
                } else {
                    result.textContent = "Computer wins.";
                }
            }
            resolve();
        }, 1000); 
    });
};

playMoveBtn.onclick = async () => {
   modal.style.display = "none";
   const userMoveValue = userMove.value.toLowerCase().trim();
   const cpuMoveValue = options[Math.floor(Math.random() * options.length)];

   userText.innerText = "your " + userMoveValue;
   cpu.innerText = "Computer's " + cpuMoveValue;

   document.getElementById("vs").style.display = "inline-block";
   document.getElementById("show-modal").style.display = "block";

   await determineWinner(userMoveValue, cpuMoveValue, result);
};

document.getElementById("show-modal").onclick = () => {
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