const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    // this.cards = this.start();
    // this.deck = new Deck(this.cards);
    this.currentRound = {};
  }

  start() {
    const theCards =  prototypeQuestions.map(function(cardInfo) {
      let card = new Card (cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer);
      return card;
    });
    const deck = new Deck(theCards);
    this.currentRound = new Round(deck)
    const round = this.currentRound;

    this.printMessage(deck, round);
    this.printQuestion(round)
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
