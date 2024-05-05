
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updateScoreElement();


/*if(score === null  --Same as !score bcoz null is a falsy value){
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
} */

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;w
  }
}

function playGame(playerMove){
 pickComputerMove();

let result = '';

if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
      result = 'You loose.';
    }
    else if(computerMove === 'paper'){
      result = 'You win.'
    }
    else if(computerMove === 'scissors'){
      result = 'Tie.'
    }
}

else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
    result = 'You win.';
  }
  else if(computerMove === 'paper'){
    result = 'Tie.'
  }
  else if(computerMove === 'scissors'){
    result = 'You loose.'
  }
}

else {
      if(computerMove === 'rock'){
    result = 'Tie.';
  }
  else if(computerMove === 'paper'){
    result = 'You loose.'
  }
  else if(computerMove === 'scissors'){
    result = 'You win.'
  }
}


if(result === 'You win.'){
  score.wins ++;
}
else if(result === 'You loose.'){
  score.losses ++;
}
else if(result === 'Tie.'){
  score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML =`You
<img src="/icons/${playerMove}.png" alt="" class="m-icon">
<img src="/icons/${computerMove}.png" alt="" class="m-icon">
Computer`

  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

let computerMove = '';
function pickComputerMove(){
const randomNumber = Math.random();


if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber <2/3){
  computerMove = 'paper';
}
else {
  computerMove = 'scissors';
}

  return ;
  }
