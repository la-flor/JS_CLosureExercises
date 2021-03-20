function guessingGame() {
    const winningNum = Math.floor(Math.random() * 100);
    let isOver = false;
    let totalGuesses = 0;
  
    return function guess(num) {
      if (isOver) return "The game is over, you already won!";
      totalGuesses++;
      if (num === winningNum) {
        isOver = true;
        const guess = totalGuesses === 1 ? "guess" : "guesses";
        return `You win! You found ${num} in ${totalGuesses} ${guess}.`;
      }
      if (num < winningNum) return `${num} is too low!`;
      if (num > winningNum) return `${num} is too high!`;
    };
  }
  
  module.exports = { guessingGame };