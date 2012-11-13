;(function() {

var KING = {light : {unicode : '♔',
                     ascii : 'k',
                     codepoint : 'U+2654',
                     html : '&#9812;'}};

function remarkdown(src, opt) {
  return KING.light.unicode;
}

/**
 * Expose
 */

remarkdown.parser = function(src, opt) {
  setOptions(opt);
  return parse(src);
};

remarkdown.lexer = function(src, opt) {
  setOptions(opt);
  return block.lexer(src);
};

remarkdown.parse = remarkdown;

if (typeof module !== 'undefined') {
  module.exports = remarkdown;
} else {
  this.remarkdown = remarkdown;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
