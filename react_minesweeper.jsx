var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');
var Game = require('./components/game.jsx');
var Board = require('./components/board.jsx');
var Tile = require('./components/tile.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
