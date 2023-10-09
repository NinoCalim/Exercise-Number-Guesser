let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

const compareGuesses = (human, computer, target) =>{
  const userG = Math.abs(target - human);
  const computerG = Math.abs(target - computer);

  if(userG < computerG){
    return true;
  }else if(userG > computerG){
    return false;
  }else {
    return true;
  }
};

const updateScore = winner => {
  if(winner === 'human'){
    humanScore +=1;
  }else{
    computerScore +=1;
  }
};

const advanceRound = () => {
  currentRoundNumber +=1;
};

