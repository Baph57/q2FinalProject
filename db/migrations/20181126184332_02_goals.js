
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goals',(table)=>{
    table.increments();
    table.string('activity');
    table.integer('accessibility');
    table.string('type');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('key');
    table.timestamp(true,true)
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goals');
};
