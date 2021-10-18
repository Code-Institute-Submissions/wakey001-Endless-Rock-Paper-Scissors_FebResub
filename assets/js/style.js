/*DOM elements */
const computerChoiceDisplay = document.getElementById('computer-choice');
const  userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

/*Event listener for USER buttons */

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))
/*Generates computer choice  */
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random () *3 +1)
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
/* Result to tell you who has won  */
function getResult(){
    if(computerChoice === userChoice){
        result = 'This is a Draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result= 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result= 'You lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result= 'You Win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result= 'You lost!'
    }
    resultDisplay.innerHTML = result
}




