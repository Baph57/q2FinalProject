
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Marko", email: "m@me.com", password: "m", points: 100, challenges_attempted:752, challenges_completed:500},
        {name: "Dennis", email: "d@me.com", password: "d",points: 100, challenges_attempted:720, challenges_completed:255},
        {name: "Greg", email: "g@me.com", password: "g",points: 100, challenges_attempted:570, challenges_completed:420}
      ]);
    });
};
