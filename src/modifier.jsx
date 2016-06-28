var React = require("react");

var Modifier = React.createClass({
  propTypes: {
    onTouchTap: React.PropTypes.func
  },
  
  render: function() {
    return <a {...this.props} onTouchTap={this.props.onTouchTap} className={this.props.active ? "modifier active" : "modifier"} style={{background: this.props.hex}}></a>;
  }
});

module.exports = Modifier;
