const express = require('express')
const userRouter = require('./routes/users')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/user', userRouter)

const uri = "mongodb+srv://alexpierre:alexpierre@devops-wbelq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("devops").collection("users");
  // perform actions on the collection object
  client.close();
});

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})
