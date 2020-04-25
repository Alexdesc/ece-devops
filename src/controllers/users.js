const configure = require('../configure')
const fs = require('fs')
const path = require('path')
const os = require('os')

const create = (user, callback) => {

  // Check users parameters
  if(!user.username || !user.firstname || !user.lastname)
    return callback(new Error('Wrong users parameters'), null)

    // Check if user already exists
    users.findOne({username: username}, function(err, data) {
      if (err || data !== null) return callback(new Error('The username already exists'), null);
      // Create an instance of model User and save it passing a callback
      var newUser = new user({ username: username, firstname: firstname, lastname: lastname });
      newUser.save(function (err) {
        if (err) return callback(new Error(`Error while trying to save user ${username} in the database`), null);
        callback(null, user.username);
      });
    });

  // Preparing a string with user parameters
  // const srtUser = user.username + ':' + user.firstname + ':' + user.lastname + os.EOL
  const srtUser = `${user.username}:${user.firstname}:${user.lastname}${os.EOL}`

  // Defining the file for storing users "./db/users"
  config = configure()
  const usersFile = path.join(config.users.db_dir, 'users')

  // Appending to the file "./db/users"
  fs.appendFile(usersFile, srtUser, (err) => {
    if (err) throw err
    callback(null, user.username)
  })

}

// Get method to get a user by username
const get = () => {
  users.findOne({username: username}, function(err, data) {
    if (err) return callback(new Error(`Error while trying to find user ${username} in the database`), null);
    callback(null, data);
  });
}

module.exports = {
  create: create,
  get: get
}
