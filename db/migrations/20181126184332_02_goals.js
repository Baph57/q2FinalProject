
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goals',(table)=>{
    table.increment('id'),
    table.string('activity'),
    table.number('accessibility'),
    table.timestamp(true,true),
    table.timeStamp(true,true)
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goals');
};
