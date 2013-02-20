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

var QUEEN = reprify('♕', 'q', 'U+2655', '&#9813;',
                    '♛', 'Q', 'U+265B', '&#9819;');

var ROOK = reprify('♖', 'r', 'U+2656', '&#9814;',
                   '♜', 'R', 'U+265C', '&#9820;');

var BISHOP = reprify('♗', 'b', 'U+2657', '&#9815;',
                     '♝', 'B', 'U+265D', '&#9821;');

var KNIGHT = reprify('♘', 'n', 'U+2658', '&#9816;',
                     '♞', 'N', 'U+265E', '&#9822;');

var PAWN = reprify('♙', 'p', 'U+2659', '&#9817;',
                   '♟', 'P', 'U+265F', '&#9823;');

function reprs() {
  return {king :  KING,
	  queen:  QUEEN,
	  rook:   ROOK,
	  bishop: BISHOP,
	  knight: KNIGHT,
	  pawn:   PAWN};
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
