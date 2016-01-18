var React = require('react');
var Tile = require('./tile');
var Board = React.createClass({

  render: function () {
    var self = this;
    return (
      <div>
        {self.props.board.grid.map(function(row, index) {
          return <div key={index}> {row.map(function(tile, index2){
            return <Tile key={index2} tile={tile} updateGame={self.props.updateGame} ></Tile>;
          })}
          </div>;
        })}
      </div>
    );
  }

});

module.exports = Board;
