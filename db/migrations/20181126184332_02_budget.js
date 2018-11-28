
exports.up = function(knex, Promise) {
  return knex.schema.createTable('budget',(table)=>{
    table.increments();
    table.float('monthly_income');
    table.float('other_income');
    table.float('rent_mort');
    table.float('home_ins');
    table.float('repairs');
    table.float('utilities');
    table.float('cable');
    table.float('phone');
    table.float('car_payment');
    table.float('car_ins');
    table.float('gas');
    table.float('car_repair');
    table.float('edu_supplies');
    table.float('edu_loans');
    table.float('edu_tuition');
    table.float('groceries');
    table.float('eating_out');
    table.float('entertainment');
    table.float('pet_supply');
    table.float('personal_other');
    table.float('e_fund');
    table.float('retirement');
    table.float('investments');
    table.float('taxes_paid');
    table.float('savings_goal');
    table.float('savings_rate');
    table.float('total_income');
    table.float('total_expenses');
    table.float('tax_rate');
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamp(true,true)
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('budget');
};
