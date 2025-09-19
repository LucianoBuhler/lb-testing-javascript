const add = require('./add');

const result = add (1, 3);

if (result == 4) {
  console.log('Test passed');
} else {
  throw new Error(`Expected 1 + 3 to equal 4 but got ${result}`);
}

