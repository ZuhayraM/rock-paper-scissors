// Modal setup
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const submitButton = document.getElementById("submitChoice");
const userInput = document.getElementById("userChoice");
const result = document.getElementById("result");

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Async function to determine the winner
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
            resolve(); // Resolve the promise after displaying the result
        }, 1000); // Delay for 1 second
    });
};

// When the user clicks the "Play Game" button, open the modal
document.getElementById("playButton").addEventListener("click", function() {
    modal.style.display = "block"; // Show the modal
});

// When the user clicks on the <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; // Hide the modal
};

// When the user submits their choice
submitButton.addEventListener("click", function() {
    const userChoice = userInput.value.toLowerCase().trim(); // Get the input value

    // Validate the input
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return; // Exit if invalid input
    }

    // Close the modal after the user submits their choice
    modal.style.display = "none";

    // Get the computer's random choice
    const cpuChoice = getComputerChoice();
    
    // Log the choices for debugging
    console.log("User choice:", userChoice);
    console.log("CPU choice:", cpuChoice);

    // Call the async function to determine the winner
    determineWinner(userChoice, cpuChoice, result);
});
