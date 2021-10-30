/*DOM elements */
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');


let userChoice ;
let computerChoice ;
let result ;


const controlOptions = {
    rock: "./assets/images/rock.png",
    paper: "./assets/images/paper.png",
    scissors: "./assets/images/scissors.png"
}
function displayUserChoice(control) { 
    document.getElementById("user-choice-img").src = controlOptions[control]; 
    let contest = document.querySelector(".contest");
    contest.style.visibility = "visible";	 
}

/*Event listener for USER buttons */
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
}));
/*Generates computer choice  */


function generateComputerChoice(){
    const choices = ['rock', 'scissors', 'paper']
    const randomNumber = Math.floor(Math.random () * choices.length);
    computerChoiceDisplay.innerHTML = choices[randomNumber]            
};
 
    /*
    const randomNumber = Math.floor(Math.random () *3 +1);
    if (randomNumber === 1){
        computerChoice = 'rock';
    }
    if (randomNumber === 2){
        computerChoice = 'scissors';
    }
    if(randomNumber === 3){
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    
}
/* Result to tell you who has won  */
function getResult(){
    if( computerChoiceDisplay.innerHTML === userChoice){
        result = 'This is a Draw!';
    
    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'paper'){
        result = 'You Win!';
        win();

    }
    if( computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'scissors'){
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
/**
 * Gets current score from DOM and increments by 1
 */
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




