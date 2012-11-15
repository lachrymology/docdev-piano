;(function() {

function reprify(lu, la, lc, lh, du, da, dc, dh) {
  return {light : {unicode : lu,
                   ascii : la,
                   codepoint : lc,
                   html : lh},
	  dark :  {unicode : du,
                   ascii : da,
                   codepoint : dc,
                   html : dh}};
}

var KING = reprify('♔', 'k', 'U+2654', '&#9812;',
	           '♚', 'K', 'U+265A', '&#9818;');

function reprs() {
  return {king : KING};
}

function remarkdown(src, opt) {
  return null; 
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
