const buttons = document.querySelectorAll('.btn');
const playerScore = document.querySelector('.ps');
const compScore = document.querySelector('.cs');
const winnerPrompt = document.querySelector('.winner');
const winnerValue = document.querySelector('.win');
const resetBtn = document.querySelector('.res');
let playerWins = 0;
let computerWins = 0;

buttons.forEach(element => {
  // add an event listener for each button being clicked
  element.addEventListener('click', function () {

    // generate a random number to represent the computer's choice
    // inside for loop so a new one generates on each click
    const randomNum = Math.floor(Math.random() * 3);
    // const randomNum = 2;

    // only execute if the player score and computer score are less than 3 wins
    if (playerWins < 3 && computerWins < 3) {

      // computer options: 0 == rock, 1 == scissors, 2 == paper
      if (element.value == 'Paper' && randomNum == 0) {
        console.log('Paper Beats Rock, You Win!');

        // increment player score if player wins
        playerWins++;
        // update score inside of HTML DOC
        playerScore.textContent = playerWins;

        winnerValue.textContent = 'Computer Chose rock. Player Wins this round';

      } else if (element.value == 'Paper' && randomNum == 1) {
        console.log('Scissors Beats Paper, Computer Wins!');

        computerWins++;
        compScore.textContent = computerWins;

        winnerValue.textContent = 'Computer Chose Scissors. Computer Wins this round';

      } else if (element.value == 'Paper' && randomNum == 2) {
        console.log('You both Chose paper, it\'s a draw');

        winnerValue.textContent = 'It\'s a draw';

        // continue;
      } else if (element.value == 'Scissors' && randomNum == 0) {

        computerWins++;
        compScore.textContent = computerWins;

        winnerValue.textContent = 'Computer chose rock. Computer Wins this round';

      } else if (element.value == 'Scissors' && randomNum == 1) {

        winnerValue.textContent = 'It\'s a draw';

      } else if (element.value == 'Scissors' && randomNum == 2) {
        // increment player score if player wins
        playerWins++;
        // update score inside of HTML DOC
        playerScore.textContent = playerWins;

        winnerValue.textContent = 'Computer Chose paper. Player Wins this round';
      } else if (element.value == 'Rock' && randomNum == 0) {

        winnerValue.textContent = 'It\'s a draw';

      } else if (element.value == 'Rock' && randomNum == 1) {
        // increment player score if player wins
        playerWins++;
        // update score inside of HTML DOC
        playerScore.textContent = playerWins;

        winnerValue.textContent = 'Computer Chose Scissors. Player Wins this round';
      } else if (element.value == 'Rock' && randomNum == 2) {
        computerWins++;
        compScore.textContent = computerWins;

        winnerValue.textContent = 'Computer chose paper. Computer Wins this round';
      }
    }
    // checks if player wins and sets scores so player cant go further
    if (playerWins === 3) {
      winnerPrompt.textContent = 'You Win!'
      playerScore.textContent = playerWins;
      compScore.textContent = computerWins;

    } else if (computerWins === 3) {
      winnerPrompt.textContent = 'Computer Wins, Try Again!'
      playerScore.textContent = playerWins;
      compScore.textContent = computerWins;
    }

  })
});

// button resets game once pressed
resetBtn.addEventListener('click', function () {
  playerWins = 0;
  playerScore.textContent = playerWins;
  computerWins = 0;
  compScore.textContent = computerWins;
  winnerPrompt.textContent = '';
});
