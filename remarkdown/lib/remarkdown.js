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
    vline: repr('│', '|', 'U+2502', nil),
    hline: repr('─', '-', 'U+2500', nil),
    r:     repr('┌', nil, 'U+250C', nil),
    rr:    repr('┐', nil, 'U+2510', nil),
    l:     repr('└', nil, 'U+2514', nil),
    rl:    repr('┘', nil, 'U+2518', nil),
    t:     repr('┬', nil, 'U+252C', nil),
    ut:    repr('┴', nil, 'U+2534', nil),
    rarm:  repr('├', nil, 'U+251C', nil),
    larm:  repr('┤', nil, 'U+2524', nil),
    cross: repr('┼', '+', 'U+253C', nil),
    lfill: repr('┈', '.', 'U+2508', nil),
    sfill: repr('·', '.', 'U+00B7', nil),
    dark:  repr('▒', nil, 'U+2592', nil)
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

remarkdown.opts = {
  advice: {
    code: {
      around: function(segment) {
        return "HI " + segment + "!";
      },
      inside: function(segment) {
        return segment.toUpperCase();
      }
    }
  }
};

/*

marked.Parser.parse(marked.Lexer.lex("`foo`"))
<p><code>foo</code></p>

marked.Parser.parse(marked.Lexer.lex("`foo`"), remarkdown.opts)
<p>HI!</p>

https://gist.github.com/fogus/e898669743b211a597ab

*/

if (typeof module !== 'undefined') {
  module.exports = remarkdown;
} else {
  this.remarkdown = remarkdown;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
