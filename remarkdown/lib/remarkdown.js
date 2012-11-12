;(function() {

function remarkdown(src, opt) {
  return "♔";
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
