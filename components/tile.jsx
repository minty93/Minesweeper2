var React = require('react');

var Tile = React.createClass({
  getInitialState: function (){
    return {clicked: false};
  },

  handleClick: function(event){
    this.props.updateGame(this.props.tile, event.altKey );
  },

  render: function (){
    var tileText;
    var classText = "tile";

    if (this.props.tile.flagged) {
      classText += " flagged";
      tileText = "⚑";
    } else if (this.props.tile.explored) {
      classText += " revealed";
      tileText = this.props.tile.adjacentBombCount();
      if (this.props.tile.bombed) {
        tileText = "💣";
        classText += " bombed";
      }
    } else {
      tileText = "*";
    }
    return (<div onClick={this.handleClick} className={classText}>{tileText}</div>);
  }

});

module.exports = Tile;
