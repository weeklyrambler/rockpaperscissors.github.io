//Global variables to track game scores. 
let playerScore = 0;
let computerScore = 0; 
let finalPlayerScore = 0; 
let finalComputerScore = 0; 

/*Function returns a random number betwenn 0 and 2 and uses conditional block to determine if the computer chooses rock, paper or scissors. Choice of the computer is saved to the item variable and returned*/
function getComputerChoice() {
  let num =  Math.floor(Math.random() * 3); 
  let item = null; 
  if (num == 0) {
    item = 'rock'; 
  } else if (num == 1) {
      item = 'paper'; 
  } else {
    item = 'scissors'; 
  }
 return item; 
}

/*Gets the player inputted choice and calls getComputerChoice to get computer's choice. Conditional blocks used to determine the outcome and tally a point for either the computer or player.*/ 
function playRound(playerSelection, computerSelection) {
  let player = playerSelection; 
  document.getElementById("paste").innerHTML = player; 
  computerSelection = getComputerChoice(); 
  document.getElementById("paste").innerHTML = computerSelection; 
  let outcome = ' '; 
  if (player == 'rock' && computerSelection == 'paper') {
   outcome = "Oh no! The computer chose paper, you lose!"; 
   computerScore += 1; 
   finalComputerScore += 1; 
  } else if (player == 'rock' && computerSelection == 'scissors') {
   outcome = "Yes! rock beats scissors! You win!";  
   playerScore += 1; 
   finalPlayerScore += 1; 
  } else if (player == 'rock' && computerSelection == 'rock') {
   outcome = "Yikes! It's a tie, you both chose rock! Try again."; 
  };

  if (player == 'paper' && computerSelection == 'scissors') {
    outcome = "Oh no! The computer chose scissors, you lose!";
    computerScore += 1; 
    finalComputerScore += 1; 
  } else if (player == 'paper' && computerSelection == 'rock') {
    outcome = "Yes! paper beats rock! You win!";
    playerScore += 1; 
    finalPlayerScore += 1; 
  } else if (player == 'paper' && computerSelection == 'paper') {
    outcome = "Yikes! It's a tie, you both chose paper! Try again."; 
  };
   
  if (player == 'scissors' && computerSelection == 'rock') {
    outcome = "Oh no! The computer chose rock, you lose!"; 
    computerScore += 1; 
    finalComputerScore += 1; 
  } else if (player == 'scissors' && computerSelection == 'paper') {
    outcome = "Yes! scissors beats paper! You win!";  
    playerScore += 1; 
    finalPlayerScore += 1; 
  } else if (player == 'scissors' && computerSelection == 'scissors') {
    outcome = "Yikes! It's a tie, you both chose scissors! Try again."; 
  }; 

  if (finalComputerScore == 5 || finalPlayerScore == 5) {
    finalComputerScore = 0; 
    finalPlayerScore = 0; 
  }; 

 document.getElementById("paste3").innerHTML = outcome; 

}

/*Function prompts user for their choice and then calls and feeds user's choice to playRound to start the game. Scores for both computer and user are outputted each time. Conditional block determines ultimate winner after all rounds played. */

document.getElementById("rock").addEventListener("click", () => { 
  let answer = 'rock'; 
  playRound(answer.toLowerCase()); 
 document.getElementById("paste2").innerHTML = "Your score is: " + playerScore; 
 document.getElementById("paste").innerHTML = "The computer's score is: " + computerScore; 
 document.getElementById("paste4").innerHTML = ""; 
 document.getElementById("paste5").innerHTML = "";
  document.getElementById("paste6").innerHTML = ""; 

 game(); 
}); 

document.getElementById("paper").addEventListener("click", paper); 

function paper() {
  let answer = 'paper'; 
  playRound(answer.toLowerCase()); 
  document.getElementById("paste2").innerHTML = "Your score is: " + playerScore; 
  document.getElementById("paste").innerHTML = "The computer's score is: " + computerScore;
  document.getElementById("paste4").innerHTML = "";
  document.getElementById("paste5").innerHTML = "";
  document.getElementById("paste6").innerHTML = "";

    game(); 
}

document.getElementById("scissors").addEventListener("click", scissors); 

function scissors() {
  let answer = 'scissors'; 
  playRound(answer.toLowerCase()); 
  document.getElementById("paste2").innerHTML = "Your score is: " + playerScore; 
  document.getElementById("paste").innerHTML = "The computer's score is: " + computerScore;
  document.getElementById("paste4").innerHTML = ""; 
  document.getElementById("paste5").innerHTML = "";
  document.getElementById("paste6").innerHTML = "";
  
  game(); 
}

document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0; 
  computerScore = 0; 
  finalComputerScore = 0; 
  finalPlayerScore = 0; 
  document.getElementById("paste").innerHTML = ""; 
  document.getElementById("paste2").innerHTML = "";
  document.getElementById("paste3").innerHTML = "";
  document.getElementById("paste4").innerHTML = "";
  document.getElementById("paste5").innerHTML = "";
  document.getElementById("paste6").innerHTML = "";
})

function game() {
 
 if (playerScore == 5 || computerScore == 5) { 

 if (playerScore > computerScore) {
  document.getElementById("paste5").innerHTML = "Computer score: " + finalComputerScore; 
  document.getElementById("paste6").innerHTML = "Player score: " + finalPlayerScore; 
  playerScore = 0; 
  computerScore = 0;
 document.getElementById("paste4").innerHTML = "Congratulations! You have won five games before the computer."; 
 document.getElementById("paste").innerHTML = ""; 
 document.getElementById("paste2").innerHTML = "";
 document.getElementById("paste3").innerHTML = "";
 } else if (computerScore > playerScore) {
  document.getElementById("paste5").innerHTML = "Computer score: " + finalComputerScore; 
  document.getElementById("paste6").innerHTML = "Player score: " + finalPlayerScore; 
  playerScore = 0; 
  computerScore = 0;
 document.getElementById("paste4").innerHTML = "Oh no! The computer has won five games! Better luck next time."; 
 document.getElementById("paste").innerHTML = ""; 
 document.getElementById("paste2").innerHTML = "";
 document.getElementById("paste3").innerHTML = "";
 } else {
  document.getElementById("paste5").innerHTML = "Computer score: " + finalComputerScore; 
  document.getElementById("paste6").innerHTML = "Player score: " + finalPlayerScore; 
  playerScore = 0; 
  computerScore = 0;
 document.getElementById("paste4").innerHTML = "It's a tie! Try again.";
 document.getElementById("paste").innerHTML = ""; 
 document.getElementById("paste2").innerHTML = "";
 document.getElementById("paste3").innerHTML = "";
 }
} 


}

//game(); 

//Function checks to see if either score equals 5 to determine ultimate winner, then resets scores. 
/*function endGame() {
    if (computerScore == 5) {
        console.log("Uh oh! The computer has reached 5 points and won the game. Better luck next time.")
        computerScore = 0; 
        playerScore = 0; 
     } else if (playerScore == 5) {
        console.log("Yes! You have reached 5 points and have won the game! Congratulations!")
        computerScore = 0; 
        playerScore = 0; 
     }
}*/ 