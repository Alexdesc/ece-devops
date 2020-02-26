const users = require('../controllers/users')
const express = require('express')

usersRouter = express.Router()

usersRouter
  .post('/', (req, res, next) => {
    const user = {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    }
    users.create(user, (err, result) => {
      if(err) throw err
      res.status(201).json({username: result})
    })
  })
  .get('/:username', (req, res, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    // TODO Create get method API
    const username = req.params.username
  })

module.exports = usersRouter
