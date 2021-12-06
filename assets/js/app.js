//DOM elements 
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('.control');
const computerImage = document.querySelector('#house-choice-img');
let userChoice ;
let result ;
const rockRef = document.querySelector('#rock');
const scissorsRef = document.querySelector('#scissors');
const paperRef = document.querySelector('#paper');


/* Event listeners for the <a> buttons Rock, paper scissors .
 When clicked call the function displayUserChoice*/ 

rockRef.addEventListener('click', () => {
    displayUserChoice('rock');});

scissorsRef.addEventListener('click', () => {
    displayUserChoice('paper');});

paperRef.addEventListener('click', () => {
    displayUserChoice('scissors');});


 //Passes the value rock,paper,scissors from html into image 
 
const controlOptions = {
    rock: "./assets/images/rock.png",
    paper: "./assets/images/paper.png",
    scissors: "./assets/images/scissors.png"
};
//Gets the value of rock paper scissor from html buttons
 
function displayUserChoice(control) { 
    document.getElementById("user-choice-img").src = controlOptions[control];

    let userContest = document.getElementById("user-choice-img");
      userContest.style.visibility = "visible" ;
    }
      
//Event listener for USER buttons 
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
}));

//Generates computer choice . 

function generateComputerChoice(){
    const choices = ['rock', 'scissors', 'paper'];
    const randomNumber = Math.floor(Math.random () * choices.length);
    computerChoiceDisplay.innerHTML = choices[randomNumber] ;
    computerImage.src = `./assets/images/${computerChoiceDisplay.innerHTML}-mirror.png`; 
     computerImage.style.visibility = "visible" ;  
 }

//Result to tell you who has won.

function getResult(){
    if(computerChoiceDisplay.innerHTML === userChoice){
        result = 'This is a Draw, you both score!';
        draw();
    
    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'paper'){
        result = 'You Win!';
        win();

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'scissors'){
        result = 'You lost!';
        lose();

    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'scissors'){
        result= 'You Win!';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'rock'){
        result= 'You lost!';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'rock'){
        result= 'You Win!';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'paper'){
        result= 'You lost!';
        lose();
        
    }
    resultDisplay.innerHTML = result;
}
 
//Gets current score from DOM and increments by 1
 
function win(){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    
}
function lose(){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;

}
function draw(){
    playerScore++;
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;
}




