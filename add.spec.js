const add = require('./add');
const assert = require('assert');

const result = add (1, 3);

const expectedResult = 4

assert.equal(result, expectedResult, `Add function does not working properly: expected 1 + 3 to equal 4 but got ${result}`);
