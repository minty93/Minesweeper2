var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Board = require('./board.jsx');

var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(10, 10)};
  },

  updateGame: function() {

  },

  render: function() {


    return (<Board board={this.state.board} updateGame={this.updateGame} />);
  }

});

module.exports = Game;
