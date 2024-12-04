var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const options = ["rock", "paper", "scissors"];
let modalQ = document.getElementById("questions");
var cpu = document.getElementById("cpu");
var user = document.getElementById("user");
var result = document.getElementById("results")
const userName = document.getElementById("user-name");
const userNameVal = userName.value;
const userMove = document.getElementById("move");
// userMove.value.toLowerCase();
const checkNameBtn = document.getElementById("check-name-btn");
const playMoveBtn = document.getElementById("play-btn");

window.onload = () => {
    modal.style.display = "block";
    modalQ.innerText = "Hi there! What's your name?";
    userMove.value = "";
};

checkNameBtn.onclick = () => {
if (userName.value > 10) {
    alert("Enter a valid name please! Should not exceed 10 characters and no numbers or special character allowed.");
 } else {
     modalQ.innerText = `Hi ${userName.value}! Let's play!`;
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


// const playerWin = (userMove, cpu) => {
function playerWin(user, cpu) {
    return (
        (user === "rock" && cpu === "scissors") || 
        (user === "scissors" && cpu === "paper") || 
        (user === "paper" && cpu === "rock")
    );
}

playMoveBtn.onclick = () => {
    modal.style.display = "none";
    user.innerText = "your " + userMove.value;
    cpu.innerText = "Computer's " + options[Math.floor(Math.random() * options.length)];
    document.getElementById("vs").style.display = "inline-block";
    document.getElementById("show-modal").style.display = "block";
    if (playerWin(user, cpu)) {
            result.innerText = "You win!";
      } else if (cpu === user) {
            result.innerText = "It was a draw...";
      } else {
            result.innerText = "Computer wins.";
      }
};



document.getElementById("show-modal").onclick = () => {
    modal.style.display = "block";
    userMove.value = "";
};

span.onclick = function() {
    modal.style.display = "none";
}
