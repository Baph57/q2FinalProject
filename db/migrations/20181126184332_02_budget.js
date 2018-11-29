
exports.up = function(knex, Promise) {
  return knex.schema.createTable('budget',(table)=>{
    table.increments();
    table.float('Monthly_Income');
    table.float('Other_Income');
    table.float('Housing_payment');
    table.float('Home_Insurance');
    table.float('Repairs');
    table.float('Utilities');
    table.float('Cable');
    table.float('Phone');
    table.float('auto_Payment');
    table.float('car_Insurance');
    table.float('Gas');
    table.float('car_Repair');
    table.float('School_Supplies');
    table.float('Higher_Edu_Loans');
    table.float('Tuition');
    table.float('Groceries');
    table.float('eating_Out');
    table.float('Entertainment');
    table.float('Pet_Supply');
    table.float('Personal_Other');
    table.float('Emergency_Fund');
    table.float('Retirement_Savings');
    table.float('Investments');
    table.float('Taxes_Paid');
    table.float('Saving_Goal');
    table.float('Savings_Rate');
    table.float('Money');
    table.float('Gone');
    table.float('Government');
    table.float('Worth');
    table.float('Checking');
    table.float('Saving')
    table.integer('Month')
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .index();
    table.timestamps(true,true);
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('budget');
};
