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
const lizardRef = document.querySelector('#lizard');
const spockRef = document.querySelector('#spock');
var rulesRef = document.getElementById('rules')


/* Event listeners for the buttons Rock, paper, scissors, lizard, spock .
 When clicked call the function displayUserChoice*/ 

rockRef.addEventListener('click', () => {
    displayUserChoice('rock');});

scissorsRef.addEventListener('click', () => {
    displayUserChoice('scissors');});

paperRef.addEventListener('click', () => {
    displayUserChoice('paper');});

lizardRef.addEventListener('click', () => {
    displayUserChoice('lizard');});

spockRef.addEventListener('click', () => {
    displayUserChoice('spock');});

// Adds event listener to the rules button and toggles it to close
rulesRef.addEventListener('click', toggleImage)

 //Passes the value rock,paper,scissors from html into image 
 
const controlOptions = {
    rock: "./assets/images/rock.png",
    paper: "./assets/images/paper.png",
    scissors: "./assets/images/scissors.png",
    lizard: "./assets/images/lizard.png",
    spock: "./assets/images/spock.png"
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
gameOver();
}));

//Generates computer choice . 

function generateComputerChoice(){
    const choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random () * choices.length);
    computerChoiceDisplay.innerHTML = choices[randomNumber] ;
    computerImage.src = `./assets/images/${computerChoiceDisplay.innerHTML}-mirror.png`; 
     computerImage.style.visibility = "visible" ;  
 }

//Result to tell you who has won.

function getResult(){
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'rock'){
        result = 'Draw, you both have rock!';
    // Draw
    
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'paper'){
        result = 'Draw, you both have paper!';
    // Draw

    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'scissors'){
        result = 'Draw, you both have scissors!';
    // Draw

    }
    if(computerChoiceDisplay.innerHTML === 'lizard' && userChoice === 'lizard'){
        result = 'Draw, you both have lizard!';
    // Draw

    }
    if(computerChoiceDisplay.innerHTML === 'spock' && userChoice === 'spock'){
        result = 'Draw, you both have spock!';
    // Draw

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'paper'){
        result = 'You Win, paper wraps rock !';
        win();

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'scissors'){
        result = 'You lost!, scissors gets jammed by rock  ';
        lose();
    
    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'lizard'){
        result = 'You lost!, lizard gets crushed by rock  ';
        lose();

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'spock'){
        result = 'You Win!, spock vaporizes rock';
        win();

    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'scissors'){
        result= 'You Win!, scissors cuts paper';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'rock'){
        result= 'You lost!, rock gets wrapped by paper';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'lizard'){
        result= 'You Win!, lizard eats paper';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'spock'){
        result= 'You lost!, spock gets disproven by paper';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'rock'){
        result= 'You Win!, rock jams scissors';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'paper'){
        result= 'You lost!, paper gets cut by scissors';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'lizard'){
        result= 'You lost!, lizard gets decapitated by scissors';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'spock'){
        result= 'You Win!, spock smashes scissors';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'lizard' && userChoice === 'rock'){
        result= 'You Win!, rock crushes lizard';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'lizard' && userChoice === 'paper'){
        result= 'You Lose!, paper gets eaten by lizard';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'lizard' && userChoice === 'scissors'){
        result= 'You Win!, scissors decapitates lizard';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'lizard' && userChoice === 'spock'){
        result= 'You lose!, spock gets poisoned by lizard';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'spock' && userChoice === 'rock'){
        result= 'You lose!, rock gets vaporized by spock';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'spock' && userChoice === 'paper'){
        result= 'You Win!, paper disproves spock';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'spock' && userChoice === 'scissors'){
        result= 'You lose!, scissors gets smashed by spock ';
        lose();
        
    }
    if(computerChoiceDisplay.innerHTML === 'spock' && userChoice === 'lizard'){
        result= 'You Win!, lizard poisons spocks';
        win();
        

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
// resets the game at 15 and tells whomever gets there first
function gameOver(){
    if(playerScore === 15 && computerScore < 15){
        alert("You won press ok to reset the game");
        playerScore = 0;
        computerScore = 0;
    }
    if(playerScore < 15 && computerScore === 15){
        alert("You lost press ok to reset the game");
        playerScore = 0;
        computerScore = 0;

    }
}
// controls the footer Rules button 
function toggleImage() {
    var hiddenImage = document.getElementById('rules-text');
    hiddenImage.classList.toggle('hidden');
  }
  
  
  



