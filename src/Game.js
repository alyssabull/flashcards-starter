const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.deck = this.start();
    this.currentRound = new Round(this.deck);
  }

  start() {
    const deck = prototypeQuestions.map(function(card) {
      const flashCard = new Card (card.id, card.question, card.answers, card.correctAnswer);
      return flashCard;
    });

    return deck;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
