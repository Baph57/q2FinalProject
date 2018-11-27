
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',(table)=>{
    table.increment('id'),
    table.string('name'),
    table.string('email'),
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.deleteTable('users');
};
