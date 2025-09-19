const users = require('./db/users');

/*
    I'll add some delay to make it more realistic
    to simulate a real database call
*/

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!users) return reject(new Error('No users found'));

      return resolve({
        message: 'Users retrieved successfully',
        data: users
      });
    }, 10)
  })
}

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id == id);
      
      if(!user) return reject(new Error(`User with id: ${id} was not found`));

      return resolve({
        message: `User with id: ${id} was found successfully`,
        data: user
      });
    }, 10)
  })
}

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.email == email);

      if(!user) return reject(new Error(`Error with email: ${email} was not found`));

      return resolve({
        message: `User with email: ${email} was found successfully`,
        data: user
      })
    }, 10)
  })
}

module.exports = {
    getAllUsers,
    findUserById,
    findUserByEmail
};