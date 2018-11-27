
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Marko", email: "m@me.com", password: "m"},
        {name: "Dennis", email: "d@me.com", password: "d"},
        {name: "Greg", email: "g@me.com", password: "g"}
      ]);
    });
};
