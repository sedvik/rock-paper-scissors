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