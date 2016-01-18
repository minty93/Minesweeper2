var React = require('react');

var Tile = React.createClass({
  getInitialState: function (){
    return {clicked: false};
  },

  render: function (){
    var tileText;

    return (<div> "T" </div>);
  }

});

module.exports = Tile;
