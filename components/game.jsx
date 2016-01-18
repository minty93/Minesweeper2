var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Board = require('./board.jsx');

var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(10, 10)};
  },

  updateGame: function(tile, flagging) {
    if (flagging){
      tile.toggleFlag();
    }
    else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  },

  restartGame: function () {
    this.setState({board: new Minesweeper.Board(10,10)});
  },

  render: function() {
    var endGameText;
    var modalClassName = "modal";

    if (this.state.board.won()){
      endGameText = "You Win!";
      modalClassName += " is-active";
    }
    else if (this.state.board.lost()) {
      endGameText = "BOOM!!! You Suck!";
      modalClassName += " is-active";
    }



    return (
      <section>
        <div className="gameBoard">
          <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
        <section id="modal" className={modalClassName}>
          <article className="modal-content">
            <h3>{endGameText}</h3>
            <button className="play-again" onClick={this.restartGame}>Play Again!</button>
          </article>
          <div className="modal-screen js-hide-modal"></div>
        </section>
      </section>
    );
  }

});

module.exports = Game;
