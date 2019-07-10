// Selected elements
const options = document.querySelectorAll('i');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const winner = document.querySelector('#winner');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const reset = document.querySelector('#reset');

// Event listeners
reset.addEventListener('click', resetGame);
options.forEach(option => {
    option.addEventListener('click', playGame);
})

// Choices
function playGame(event) {
    
    let playerSelection = event.target.id;
    let computerSelection = Math.random();
    
    if(computerSelection < 0.34) {
        computerSelection = 'rock';
    } else if (computerSelection <= 0.67) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    playerChoice.innerText = `You show: ${playerSelection}`;
    computerChoice.innerText = `The computer shows: ${computerSelection}`;
    
    winner.innerText = checkWinner(playerSelection, computerSelection).winner;
}

// Selecting the winner
function checkWinner(player, computer) {
    const compWins = 'The computer wins.';
    const playerWins = 'YOU WIN!';
//  const tie = 'It is a tie, play again.';
    
    if(player === computer) {
        return {
            winner: 'It is a tie, play again.'
        } 
    } 
    
    else if (player === 'paper') {
        if (computer === 'rock') {
            return {
                winner: playerWins,
                score: incrementScore(playerScore)
            } 
            
        } else {
            return {
                winner: compWins,
                score: incrementScore(computerScore)
            } 
        }
    } 
    
    else if(player === 'rock') {
        if (computer === 'paper') {
            return {
                winner: compWins,
                score: incrementScore(computerScore)
            } 
        } else {
            return {
                winner: playerWins,
                score: incrementScore(playerScore)
            } 
        }
    }
    
    else {
        if (computer === 'paper') {
            return {
                winner: playerWins,
                score: incrementScore(playerScore)
            } 
        } else {
            return {
                winner: compWins,
                score: incrementScore(computerScore)
            } 
        } 
    }
    
//    if (player === 'paper') {
//        if (computer === 'paper') {
//            winner.innerText = tie;
//        } else if (computer === 'rock') {
//            winner.innerText = playerWins;
//            incrementScore(playerScore);
//        } else {
//            winner.innerText = compWins;
//            incrementScore(computerScore);
//        }
//    } else if (player === 'rock') {
//        if (computer === 'paper') {
//            winner.innerText = compWins;
//            incrementScore(computerScore)
//        } else if (computer === 'rock') {
//            winner.innerText = tie;
//        } else {
//            winner.innerText = playerWins;
//            incrementScore(playerScore)
//        }
//    } else {
//        if (computer === 'paper') {
//            winner.innerText = playerWins;
//            incrementScore(playerScore)
//        } else if (computer === 'rock') {
//            winner.innerText = compWins;
//            incrementScore(computerScore)
//        } else {
//            winner.innerText = tie;
//        }
//    }
}

// Update scoreboard
function incrementScore(winner) {
    return Number(winner.innerText++);
}

// Reset game
function resetGame() {
    playerScore.innerText = '0';
    computerScore.innerText = '0';
    playerChoice.innerText = 'Player';
    computerChoice.innerText = 'Computer';
    winner.innerText = 'Winner';
}
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               