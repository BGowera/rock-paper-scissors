

// function for computer turns

function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let value;
    switch (randomNum) {
        case 0:
            value = options[0];
            break;
        case 1:
            value = options[1];
            break;
        case 2:
            value = options[2];
            break;
        default:
            value = 'Something went wrong';
    }
    return value;
}

// function for player input
function userPlay() {
    let userPrompt = prompt('Rock,Paper or Scissors?');
    return userPrompt.toLowerCase();
}

// function to play a single round

let playerScore = 0;
let computerScore = 0;

function playRound() {
let winner;
   let userChoice = userPlay();
    let computerChoice = computerPlay();
// win scenarios
    if (userChoice == 'rock' && computerChoice == 'scissors'||userChoice == 'paper' && computerChoice == 'rock'||userChoice=='scissors'&& computerChoice=='paper'){
        playerScore++;
        console.log(`You chose ${userChoice} and computer chose ${computerChoice}`);
        winner = 'You win!!!';
    }

    // lose scenario
       else if (userChoice == 'rock' && computerChoice == 'paper'||userChoice == 'paper' && computerChoice == 'scissors'||userChoice=='scissors'&&computerChoice=='rock'){
        computerScore++;
        console.log(`You chose ${userChoice} and computer chose ${computerChoice}`);
        winner = 'Computer wins!!!';
    }
// draw scenario
else if (userChoice == 'rock' && computerChoice == 'rock'||userChoice == 'paper' && computerChoice == 'paper'||userChoice=='scissors'&&computerChoice=='scissors'){
   
        console.log(`You chose ${userChoice} and computer chose ${computerChoice}`);
        winner = 'Draw Game!!!';
    }
    
return winner
}

// function for 5 round game



function playGame() {
    let overallWinner;
    console.log('Best of 5 let\'s go!');
    for (let i = 1; i < 6; i++){
        console.log(`Round${i}`);
        console.log(playRound());
        console.log(`Your score-${playerScore}`)
        console.log(`Computer score-${computerScore}`)
    }
    if (playerScore > computerScore) {
    overallWinner='Player 1 Wins';
    }
    else if (computerScore > playerScore) {
        overallWinner = 'Computer wins';
    }
    else if (computerScore == playerScore) {
        overallWinner = 'Draw Game';
    }
    return overallWinner;
}
