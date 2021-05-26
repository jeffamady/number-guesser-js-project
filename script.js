let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

const compareGuesses = (userGuess, computerGuess, targetGuess) => {
    const userDiff = Math.abs(targetGuess- userGuess)
    const computerDiff = Math.abs(targetGuess - computerGuess)
    return userDiff <= computerDiff;
}


const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

const advanceRound = () => currentRoundNumber++;


