
exports.up = function(knex, Promise) {
  return knex.schema.createTable('newTable', function (table) {
    table.increments('id').primary()
    table.string('pokemonName')
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('newTable')
};
