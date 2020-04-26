var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String , required:true},
    firstname: {type: String , required:true},
    lastname: {type: String , required:true},
});

module.exports = User = mongoose.model('User', userSchema, 'users');
