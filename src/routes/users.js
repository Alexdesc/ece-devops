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
    const username = req.params.username;
    users.get(username, (err, result) => {
      if (err) return res.status(400).json({
        error: {
          message: err.message,
        }
      });
      res.status(200).json({
        username: result.username,
        firstname: result.firstname,
        lastname: result.lastname,
      })
    })
  })

module.exports = usersRouter
