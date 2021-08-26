// computerPlay function - randomly returns either 'Rock', 'Paper', or 'Scissors' for the computer's choice
function computerPlay() {
    let computerChoice;

    // Generate a random integer between 0 and 2
    const randomInt = Math.floor(Math.random() * 3);

    // Map random integer to the 3 possible game choices
    if (randomInt === 0) {
        computerChoice = 'Rock';
    } else if (randomInt === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}
// playerPlay function - prompts the player for a choice. Loops until valid input is received.
function playerPlay() {
    // Initialize playerChoice
    let playerChoice = '';

    while (!isValidChoice(playerChoice)) {
        playerChoice = prompt("Enter one of: 'rock', 'paper', or 'scissors'");
    } 

    return playerChoice;
}

// isValidChoice function - checks to ensure player input matches either "rock", "paper", or "scissors"
function isValidChoice(choice) {
    const lowerCaseChoice = choice.toLowerCase();
    return lowerCaseChoice === 'rock' || lowerCaseChoice === 'paper' || lowerCaseChoice === 'scissors';
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

    // Log the gameOutcomeText to the console and return gameOutcome 
    console.log(gameOutcomeText);

    return gameOutcome;
}

/*
// game function - Plays a 5 round game that keeps score and reports the winner at the end (if applicable)
function game() {
    // Define the number of rounds that will be played and initializes the player and computer scores, as well as the choice variables
    const numRounds = 5;
    let playerScore = 0;
    let compScore = 0;
    let playerChoice;
    let compChoice;
    let gameOutcome;

    // Log initial text explaining the game
    console.log(`This is a ${numRounds} game of Rock Paper Scissors. Whoever has more round wins at the end wins!\n`);

    // Play 5 rounds and increment the round winner's score
    for (let i = 0; i < numRounds; i++) {
        // Prompt the player for a choice
        playerChoice = playerPlay();

        // Generate computer choice
        compChoice = computerPlay();

        // Print out the round number
        console.log(`Round ${i + 1}:`)

        // Play a single round\
        gameOutcome = playRound(playerChoice, compChoice);

        // Increment score of winner, if applicable
        if (gameOutcome === 'win') {
            playerScore++;
        } else if (gameOutcome === 'loss') {
            compScore++;
        }
    }

    // Compare final scores to determine a winner and log the end-of-game text
    console.log(`Overall Score:\nPlayer: ${playerScore}, Computer: ${compScore}`);
    if (playerScore > compScore) {
        console.log('You won the game!');
    } else if (compScore > playerScore) {
        console.log('You lost the game!');
    } else {
        console.log('It was an overall tie!');
    }

}

// Play the game
game();

*/