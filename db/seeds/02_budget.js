
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('budget').del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        { "Monthly_Income": 8000,
          "Other_Income": 5000,
          "Housing_payment": 3000,
          "Home_Insurance": 100,
          "Repairs": 200,
          "Utilities": 400,
          "Cable": 400,
          "Phone": 250,
          "auto_Payment":3200,
          "car_Insurance": 200,
          "Gas": 0,
          "car_Repair": 400,
          "School_Supplies": 500,
          "Higher_Edu_Loans":2500,
          "Tuition": 0,
          "Groceries": 1400,
          "eating_Out": 400,
          "Entertainment": 300,
          "Pet_Supply": 200,
          "Personal_Other": 300,
          "Emergency_Fund":500,
          "Retirement_Savings": 2500,
          "Investments": 1000,
          "Taxes_Paid": 2000,
          "Savings_Rate": 0,
          "Saving_Goal": 0,
          "Money": 0,
          "Gone": 0,
          "Government": 35,
          user_id: 1
          },
      ]);
    });
};
