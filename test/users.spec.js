const { 
  getAllUsers,
  findUserById,
  findUserByEmail } = require('../users');
const assert = require('assert');

// using async/await here
describe('the getAllUsers function', () => {
  it('should return all users (Using async/await)', async () => {
    const users = await getAllUsers();
    const expectedMessage = 'Users retrieved successfully';

    assert.equal(users.message, expectedMessage)
  })
})

// lets use an alternative way of testing promises here with then
describe('the findUserById function', () => {
  it('should return a user by id (Using the return promise method)',  () => {

    return findUserById(2).then(response => {
      const expectedMessage = 'User with id: 2 was found successfully';
  
      assert.equal(response.message, expectedMessage);
      assert.equal(response.data.id, 2);
      assert.equal(response.data.name, 'peter Duck');
    })
  })
})

// and the classic Mocha async style, the 'old school' using the callback done
describe('The findUserByEmail function', () => {
  it('should return a user by email (Using callback done)', done => {
    const email = 'peter_duck@ducks.co';

    findUserByEmail(email).then(response => {
      const expectedMessage = `User with email: ${email} was found successfully`;
      assert.equal(response.message, expectedMessage);
      
      done();
    })
  })

  it('should rejects with error if user email was not found (Using async/await)',  async () => {
    const email = 'www@qqq.com';
    const expectedErrorMessage = `Error with email: ${email} was not found`;
    
    try {
      await findUserByEmail(email);
      assert.fail('Expect findUserByEmail function to reject');
    } catch (error) {
      assert.equal(error.message, expectedErrorMessage);
    }

  })
})
