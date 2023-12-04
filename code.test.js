const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var g = {
    graph: [[1, 2, 3], [0, 2], [1, 0], [0, 4], [3]]
  };
assert(JSON.stringify(hasCycle(g)) == JSON.stringify(true));


var g = {
    graph: [[1], [0, 2], [1]]
  };
assert(JSON.stringify(hasCycle(g)) == JSON.stringify(false));


var g = {
    graph: [[1], [0, 2], []]
  };
assert(JSON.stringify(hasCycle(g)) == JSON.stringify(false));


var g = {
    graph: [[], [2], [0]]
  };
assert(JSON.stringify(hasCycle(g)) == JSON.stringify(false));
