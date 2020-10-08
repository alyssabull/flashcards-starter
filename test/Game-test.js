const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
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
