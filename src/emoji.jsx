var React = require("react");

var Emoji = function(emojilib) {
  return React.createClass({
    propTypes: {
      onTouchTap: React.PropTypes.func
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
      // avoid rerendering the Emoji component if the shortname hasnt changed
      return nextProps.shortname != this.props.shortname;
    },
    
    createMarkup: function() {
      return {__html: emojilib.shortnameToImage(this.props.shortname)};
    },
    
    render: function() {
      return <div {...this.props} onTouchTap={this.props.onTouchTap} tabIndex="0" className="emoji" 
                  title={this.props.name} 
                  dangerouslySetInnerHTML={this.createMarkup()}>
      </div>
  }});
};

module.exports = Emoji;
