// Global variables
const numWinsRequired = 5;
let playerScore = 0;
let compScore = 0;

// computerPlay function - randomly returns either 'Rock', 'Paper', or 'Scissors' for the computer's choice
function computerPlay() {
    let computerChoice;

    // Generate a random integer between 0 and 2
    const randomInt = Math.floor(Math.random() * 3);

    // Map random integer to the 3 possible game choices
    if (randomInt === 0) {
        computerChoice = 'rock';
    } else if (randomInt === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// playRound function - plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    let gameOutcome; // Stores 1 of 3 outcomes from the player's perspective ("win", "loss", or "tie");
    let gameOutcomeText; // Stores the string with the game result that is returned from this function
    
    // Convert both playerSelection and computerSelection to lowercase for comparisons
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    // Compare playerChoice and computerChoice to determine if the player won, lost, or tied the computer

    // If player chooses rock
    if (playerChoice === 'rock') {
        // tie if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = 'tie';
            gameOutcomeText = "It's a tie! Both chose rock.";
        }
        // lose if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = 'loss';
            gameOutcomeText = "You lose! Paper beats rock."
        }
        // win if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = 'win';
            gameOutcomeText = "You win! Rock beats scissors.";
        }  
    }
    // If player chooses paper
    else if (playerChoice === 'paper') {
        // win if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = 'win';
            gameOutcomeText = "You win! Paper beats rock.";
        }
        // tie if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = 'tie';
            gameOutcomeText = "It's a tie! Both chose paper.";
        }
        // lose if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = 'loss';
            gameOutcomeText = "You lose! Scissors beats paper.";
        }
    }
    // If player chooses scissors
    else if (playerChoice === 'scissors') {
        // lose if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = 'loss';
            gameOutcomeText = "You lose! Rock beats scissors.";
        }
        // win if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = 'win';
            gameOutcomeText = "You win! Scissors beats paper.";
        }
        // tie if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = 'tie';
            gameOutcomeText = "It's a tie! Both chose scissors.";
        }
    }

    return [gameOutcome, gameOutcomeText];
}

// Updates playerScore and compScore global variables based on the game outcome
function updateGameScore(gameOutcome) {
    if (gameOutcome === 'win') {
        playerScore++;
    } else if (gameOutcome === 'loss') {
        compScore++;
    }
}

// Event handlers for click events
function handleChoiceClick(e) {
    if (playerScore >= 5 || compScore >= 5) {
        return;
    }

    const playerChoice = e.target.value;
    const computerChoice = computerPlay();
    
    // Play a single round
    const [gameOutcome, gameOutcomeText] = playRound(playerChoice, computerChoice);

    // Increment winner's score
    updateGameScore(gameOutcome);

    // Populate Player choice, computer choice, and round result html fields
    const playerChoiceSpan = document.getElementById('player-choice');
    const compChoiceSpan = document.getElementById('computer-choice');
    const roundResultSpan = document.getElementById('round-result');
    playerChoiceSpan.textContent = playerChoice;
    compChoiceSpan.textContent = computerChoice;
    roundResultSpan.textContent = gameOutcomeText;

    // Update Score section with new scores
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = compScore;
}

// Assign event handlers to Rock, Paper, and Scissors buttons
const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(button => {
    button.addEventListener('click', handleChoiceClick);
});