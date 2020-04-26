const configure = require('../configure')
const fs = require('fs')
const path = require('path')
const os = require('os')
var User = require ('../models/User');

const create = (user, callback) => {
  if(!user.username || !user.firstname || !user.lastname){
    return callback(new Error('Wrong users parameters'), null)
  }

    // Check if user exists
    User.findOne({username: user.username}, function(err, data) {
      if (err || data !== null) return callback(new Error('The user already exists'), null);
      // Create an instance of model User and save it passing a callback
      console.log("creating");
      var newStudent = new User({ username: user.username, firstname: user.firstname, lastname: user.lastname });
      newStudent.save(function (err) {
        if (err) return callback(new Error(`Coulnd't save user in database`), null);
        callback(null, user.username);
      });
      console.log("User creat !");
    });
}

// Get method to get a user by username
const get = (username,callback) => {
  User.findOne({username: username}, function(err, data) {
    if (err) return callback(new Error(`Could not find user in database`), null);
    callback(null, data);
  });
}

module.exports = {
  create: create,
  get: get
}
