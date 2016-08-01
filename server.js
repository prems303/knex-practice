var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')

var PORT = 3000

var logic = require('./index.js')

var app = express()
app.use(bodyParser.json())

app.get('/', function(req, res) {
  logic.getNames()
  .then((names) => res.send(names))
  .catch(function (err) {
    console.error('BAD STUFF!')
  })
})

app.post('/', function(req, res) {
  knex('dogs')
    .insert(req.body)
    .then((data) => {
      res.json(req.body)
    })
    .catch(function (err) {
      console.error('BAD STUFF!')
    })
})

app.listen(PORT, function () {
  console.log('Listening on PORT 3000')
})
