const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', function() {
  let game;
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    deck = new Deck([card1, card2, card3]);
    game = new Game();
    round = new Round(deck);
    card1 = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');
    card2 = new Card(14, 'What does Dumbledore give Ron in his will?', ['deluminator', 'invisibility cloak', 'wand'], 'deluminator');
    card3 = new Card(12, 'What does the Imperius Curse do?', ['kills', 'controls', 'mimics'], 'controls');
  });


  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  // it('should have current round null by default', function() {
  //   expect(game.currentRound).to.equal(null);
  // });

  it('should keep track of the current round', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  // it('should create an array of cards when the game starts', function() {
  //   game.start();
  //   expect(game.start()).to.be.an.instanceof(Card);
  // })

});
