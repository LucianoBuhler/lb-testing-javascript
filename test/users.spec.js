const { 
  getAllUsers,
  findUserById,
  findUserByEmail } = require('../users');

// using async/await here
describe('the getAllUsers function', () => {
  it('should return all users (Using async/await)', async () => {
    const users = await getAllUsers();
    const expectedMessage = 'Users retrieved successfully';

    expect(users.message).toBe(expectedMessage)
  })
})

// lets use an alternative way of testing promises here with then
describe('the findUserById function', () => {
  it('should return a user by id (Using the return promise method)',  () => {

    return findUserById(2).then(response => {
      const expectedMessage = 'User with id: 2 was found successfully';
  
      expect(response.message).toBe(expectedMessage);
      expect(response.data.id).toBe(2);
      expect(response.data.name).toBe('peter Duck');
    })
  })

  it('should rejects with error if user id was not found', () => {
    const id = 999;
    const user = findUserById(id)
    
    // expect(user).rejects.toEqual(new Error(`User with id: ${id} was not found`))
    expect(user)
      .rejects.toThrow(`User with id: ${id} was not found`)

  })
})

// and the classic Mocha async style, the 'old school' using the callback done
describe('The findUserByEmail function', () => {
  it('should return a user by email (Using callback done)', done => {
    const email = 'peter_duck@ducks.co';

    findUserByEmail(email).then(response => {
      const expectedMessage = `User with email: ${email} was found successfully`;
      expect(response.message).toEqual(expectedMessage)
      
      done();
    })
  })

  it('should rejects with error if user email was not found',  async () => {
    const email = 'www@qqq.com';
    const expectedErrorMessage = `Error with email: ${email} was not found`;

    await expect(findUserByEmail(email))
      .rejects.toThrow(expectedErrorMessage)
  })
})
