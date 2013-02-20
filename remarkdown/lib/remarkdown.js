;(function() {

function repr(u, a, c, h) {
  return {
    unicode : u,
    ascii : a,
    codepoint : c,
    html : h
  };
}

function piece(lu, la, lc, lh, du, da, dc, dh) {
  return {
    light : repr(lu, la, lc, lh),
    dark :  repr(du, da, dc, dh)
  };
}

var KING = piece('♔', 'k', 'U+2654', '&#9812;',
                 '♚', 'K', 'U+265A', '&#9818;');

var QUEEN = piece('♕', 'q', 'U+2655', '&#9813;',
                  '♛', 'Q', 'U+265B', '&#9819;');

var ROOK = piece('♖', 'r', 'U+2656', '&#9814;',
                 '♜', 'R', 'U+265C', '&#9820;');

var BISHOP = piece('♗', 'b', 'U+2657', '&#9815;',
                   '♝', 'B', 'U+265D', '&#9821;');

var KNIGHT = piece('♘', 'n', 'U+2658', '&#9816;',
                   '♞', 'N', 'U+265E', '&#9822;');

var PAWN = piece('♙', 'p', 'U+2659', '&#9817;',
                 '♟', 'P', 'U+265F', '&#9823;');

function pieceReprs() {
  return {
    king :  KING,
    queen:  QUEEN,
    rook:   ROOK,
    bishop: BISHOP,
    knight: KNIGHT,
    pawn:   PAWN
  };
}

function boardReprs() {
  return {
  
  };
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
