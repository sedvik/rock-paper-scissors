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

// playRound function - plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    let gameOutcome; // Stores the string with the game result that is returned from this function
    
    // Convert both playerSelection and computerSelection to lowercase for comparisons
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    // Compare playerChoice and computerChoice to determine if the player won, lost, or tied the computer

    // If player chooses rock
    if (playerChoice === 'rock') {
        // tie if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = "It's a tie! Both chose rock.";
        }
        // lose if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = "You lose! Paper beats rock."
        }
        // win if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = "You win! Rock beats scissors.";
        }  
    }
    // If player chooses paper
    else if (playerChoice === 'paper') {
        // win if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = "You win! Paper beats rock.";
        }
        // tie if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = "It's a tie! Both chose paper.";
        }
        // lose if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = "You lose! Scissors beats paper.";
        }
    }
    // If player chooses scissors
    else if (playerChoice === 'scissors') {
        // lose if computer chose rock
        if (computerChoice === 'rock') {
            gameOutcome = "You lose! Rock beats scissors.";
        }
        // win if computer chose paper
        else if (computerChoice === 'paper') {
            gameOutcome = "You win! Scissors beats paper.";
        }
        // tie if computer chose scissors
        else if (computerChoice === 'scissors') {
            gameOutcome = "It's a tie! Both chose scissors.";
        }
    }

    return gameOutcome;
}