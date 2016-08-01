
exports.up = function(knex, Promise) {
  // Make the schema
  return knex.schema.createTable('dogs', function (table) {
    // Setting up the schema (our expectations for what goes in the database)
    table.increments('id').primary()
    table.string('name')
    table.string('age')
  })
};

exports.down = function(knex, Promise) {
  // Undo the 'users' schema
  return knex.schema.dropTable('dogs')
};
