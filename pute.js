/* On the nth step, run the first n tms for n steps
 *
 */

/* let's do standard turing machine and it can yield its
 * tape contents every so often.
 */


/* 0 is 0, 1 is 1, 2 is blank */

/* a move is an object of the form { state : int, dir : bool, write : (0|1|2) }
 * where true means left and false means right
 */

function tapeToInt(tape) {
  var n = 0;

  var len = tape.length;
  for (var i = 0; i < length; ++i) {
    if (tape[i] === 1) {
      ++n;
    }
  }
  return n;
}

function TM(rules) {
  var q     = 0;
  var tape  = [];
  var i     = 0;

  this.step = function() {
    var move = rules[q][tape[i]];
    q = move.state;

    if (q === 'yield') {
      return tapeToInt(tape);
    }
  }
}

function RulesEnumerator(n){
  var q = 0;
  var d = 0;
  var w = 0;

  this.next = function() {
    if (q > n - 1) {
      throw 'done';
    }
    var move = { state: q, dir: d === 0 ? true : false, write : w };
    if (++w > 2) {
      w = 0;
      if (++d > 1) {
        d = 0;
        ++q;
      }
    }
    return move;
  }
}

function yield(x) {
  var res = {};
  res.next = function(){
    res.next = function(){ throw 'done' };
    return x;
  };
  return res;
}

function rulesEnumerator(n) {
  return for_(count(0, n), function(q) {
    return for_(count(0, 2), function(d) {
      return for_(count(0, 3), function(w) {
        return yield({state: q, dir: d === 0? true : false, write: w});
      })
    })
  })
}

function count(n, m) {
  var res = {};
  res.next = function() {
    if (n < m) {
      return n++;
    } else {
      throw 'done'
    }
  }
  return res;
}

function for_(gen, f) {
  var res = {};
  var g;
  res.next = function() {
    if (!g) {
      g = f(gen.next());
      return g.next();
    } else {
      try {
        return g.next();
      } catch (err) {
        if (err === 'done') {
          g = f(gen.next());
          return g.next();
        } else {
          throw err;
        }
      }
    }
  }
  return res;
}

function TmEnumerator() {
  var n = 0;
  this.next = function() {
    for (var n = 0; ; ++n) {
      for (var q = 0; q < n; ++q) {
        for (var i = 0; i < 3; ++i) {
          for (var p = 0; p < q; ++p) {
            for (var d = 0; d < 2; ++d) {
              for (var j = 0; j < 3; ++j) {
      }
    }
    var rules = [];
  }
}

var computable = (function() {
  var n    = 0;
  var self = {};
  tms      = [];
  self.step = function(){
  }
})();

var halting = function(last) {
};
