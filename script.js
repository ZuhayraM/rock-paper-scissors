var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const options = ["rock", "paper", "scissors"];
let modalQ = document.getElementById("questions");
let cpu = document.getElementById("cpu");
let user = document.getElementById("user");
const result = document.getElementById("results")
const userName = document.getElementById("user-name");
const userNameVal = userName.value;
const userMove = document.getElementById("move");
const checkNameBtn = document.getElementById("check-name-btn");
const playMoveBtn = document.getElementById("play-btn");
const lineBr = document.getElementById("line-break");
// console.log(lineBr);

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

//  const determineWinner = async function() {
//   if (user === "rock") {
//     if (cpu === "paper") {
//         result.textContent = "Computer wins.";
//     } else if (cpu === "scissors") {
//         result.textContent = "Player wins!";
//     } else {
//         result.textContent = "It's a tie.";
//     }
// } else if (user === "scissors") {
//     if (cpu === "rock") {
//         result.textContent = "Computer wins.";
//     } else if (cpu === "paper") {
//         result.textContent = "Player wins!";
//     } else {
//         result.textContent = "It's a tie.";
//     }
// } else if (user === "paper") {
//     if (cpu === "scissors") {
//         result.textContent = "Computer wins.";
//     } else if (cpu === "rock") {
//         result.textContent = "Player wins!";
//     } else {
//         result.textContent = "It's a tie.";
//     }
// } else {
//     result.textContent = "Oops. Something went wrong. Try refreshing the page or checking the console.";
// }
// };


const determineWinner = async function(user, cpu, result) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Check if it's a tie
            if (user === cpu) {
                result.textContent = "It's a tie.";
            } else {
                const winConditions = {
                    "rock": "scissors",
                    "scissors": "paper",
                    "paper": "rock"
                };
                if (winConditions[user] === cpu) {
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
    user.innerText = "your " + userMove.value.toLowerCase().trim();
    cpu.innerText = "Computer's " + options[Math.floor(Math.random() * options.length)];
    document.getElementById("vs").style.display = "inline-block";
    document.getElementById("show-modal").style.display = "block";
    determineWinner(user, cpu);
};

    document.getElementById("show-modal").onclick = () => {
    modal.style.display = "block";
    userMove.value = "";
    document.getElementById("show-modal").style.display = "none";
};

span.onclick = () => {
    modal.style.display = "none";
    document.getElementById("show-modal").style.display = "block";
    document.getElementById("show-modal").innerText = "Show modal";
};
