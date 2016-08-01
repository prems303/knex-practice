var development = require('./knexfile').development
var knex = require('knex')(development)


  // knex('dogs')
  // .insert({
  //   name: 'Daisy',
  //   age: 15
  // })
  // .into('dogs')
  // .then(getNames)
  // .then(showNames)
  // .catch(displayError)

function getNames () {
  return knex('dogs').select('dogs.name')
}

function showNames (names) {
  console.log(names)
}

function displayError (err) {
  console.error(err)
}

module.exports = {
  getNames: getNames,
  showNames: showNames,
  displayError: displayError
}
