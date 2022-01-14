let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let cardsValue = document.getElementById("card-value");
let sumValue = document.getElementById("sum-value");

/**
 *  starts the game
 */
function startGame() {
  firstCard = randomNumberGenerator();
  secondCard = randomNumberGenerator();
  cards.push(firstCard, secondCard);
  renderGame();
}

/**
 * ends game and flushes out the variables
 */
function endGame() {
  firstCard = null;
  secondCard = null;
  cards = [];
}

/**
 *  renders the logical part of the game
 */
function renderGame() {
  sum = cards.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  cardsValue.textContent = cards.toString();
  sumValue.textContent = sum;
}

/**
 *  adds a new card 
 */
function addCard() {}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 21);
}
