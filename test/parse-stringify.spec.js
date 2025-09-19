const { parse, stringify } = require('../parse-stringify');
const assert = require('assert');

describe('The stringify function', () => {
  it('should correctly stringify an object to a query string', () => {
    const actual = stringify({ name: 'John Doe', age: 30 });

    const expected = "?name=John%20Doe&age=30";

    assert.equal(actual, expected);
  });
})

describe('The parse function', () => {
  it('should correctly parse a query string to an object', () => {
    const actual = parse("?name=John%20Doe&age=30");

    const expected = { name: 'John Doe', age: '30' };

    assert.deepEqual(actual, expected);
  });
})