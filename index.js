let userScore = 0;
let computerScore = 0;
let rounds = 0;
const choices = ['rock', 'paper', 'scissors'];

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, computerChoice);

    if (result === 'win') {
        userScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
    rounds++;

    updateScoreboard();

    if (rounds === 25) {
        announceWinner();
    }
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScoreboard() {
    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
}

function announceWinner() {
    let message;
    if (userScore > computerScore) {
        message = `You win! User Score: ${userScore}, Computer Score: ${computerScore}`;
    } else if (userScore < computerScore) {
        message = `You lose! User Score: ${userScore}, Computer Score: ${computerScore}`;
    } else {
        message = `It's a draw! User Score: ${userScore}, Computer Score: ${computerScore}`;
    }
    alert(message);
    resetGame();
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    updateScoreboard();
}