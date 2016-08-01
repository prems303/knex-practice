
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('newTable').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('newTable').insert({id: 1, pokemonName: 'Bulbasaur', type: 'grass'}),
        knex('newTable').insert({id: 2, pokemonName: 'Charmander', type: 'fire'}),
        knex('newTable').insert({id: 3, pokemonName: 'Squirtle', type: 'water'})
      ]);
    });
};
