const configure = require('../configure')
const fs = require('fs')
const path = require('path')
const os = require('os')

const create = (user, callback) => {

  // Check users parameters
  if(!user.username)
    return callback(new Error('Wrong users parameters'), null)

  // TODO check if the user already exists using get()

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

// TODO create the get method
const get = () => {

}

module.exports = {
  create: create,
  get: get
}
