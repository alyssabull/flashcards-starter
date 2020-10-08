const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', () => {
  let game;
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    game = new Game();
    round = new Round(deck);
    card1 = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');
    card2 = new Card(14, 'What does Dumbledore give Ron in his will?', ['deluminator', 'invisibility cloak', 'wand'], 'deluminator');
    card3 = new Card(12, 'What does the Imperius Curse do?', ['kills', 'controls', 'mimics'], 'controls');
  });


  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start out with no rounds', () => {
    expect(game.currentRound).to.deep.equal({});
  });

  it('should keep track of the current round', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
