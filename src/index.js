const express = require('express')
const userRouter = require('./routes/users')
const bodyparser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/user', userRouter)

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
