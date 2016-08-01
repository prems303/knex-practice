
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'Aardvark', description: 'Tiny ant eater poser'}),
        knex('users').insert({id: 2, name: 'Zergling', description: 'You mashed some poor feller\'s dog, sarge'}),
        knex('users').insert({id: 3, name: 'OrcPenguin', description: 'Posh greenskin'})
      ]);
    });
};
