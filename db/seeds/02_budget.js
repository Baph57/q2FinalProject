
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('budget').del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        { monthly_income: 8000,
          other_income: 5000,
          rent_mort: 3000,
          home_ins: 100,
          repairs: 200,
          utilities: 400,
          cable: 400,
          phone: 250,
          car_payment:3200,
          car_ins: 200,
          gas: 0,
          car_repair: 400,
          edu_supplies: 500,
          edu_loans: 2500,
          edu_tuition: 0,
          groceries: 1400,
          eating_out: 400,
          entertainment: 300,
          pet_supply: 200,
          personal_other: 300,
          e_fund:500,
          retirement: 2500,
          investments: 1000,
          taxes_paid: 2000,
          savings_rate: 0,
          savings_goal: 0,
          total_income: 0,
          total_expenses: 0,
          tax_rate: 35,
          user_id: 1
          },
      ]);
    });
};
