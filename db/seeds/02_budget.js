
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('budget').del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        { monthly_income: 10000000000,
          other_income: 10000,
          rent_mort: 10000,
          home_ins: 10000,
          repairs: 10000,
          utilities: 10000,
          cable: 10000,
          phone: 10000,
          car_payment:10000 ,
          car_ins: 10000,
          gas: 10000,
          car_repair: 10000,
          edu_supplies: 10000,
          edu_loans: 10000,
          edu_tuition: 10000,
          groceries: 10000,
          eating_out: 10000,
          entertainment: 10000,
          pet_supply: 10000,
          personal_other: 10000,
          e_fund:10000,
          retirement: 10000,
          investments: 10000,
          taxes_paid: 10000,
          savings_rate: 0,
          savings_goal: 0,
          total_income: 0,
          total_expenses: 0,
          tax_rate: 20 ,
          user_id: 1
          },
      ]);
    });
};
