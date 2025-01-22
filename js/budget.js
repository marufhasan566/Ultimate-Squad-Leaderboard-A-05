document.getElementById('calculate').addEventListener('click', function (expense) {
    const perPlayerBudgetField = document.getElementById('per-player-budget-field');
    const perPlayerBudget = perPlayerBudgetField.value;
    // console.log(perPlayerBudget);
    const totalPlayerExpense = perPlayerBudget * 5;
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalPlayerExpense;
})

document.getElementById('calculate-total-button').addEventListener('click', function () {
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseString = totalExpense.innerText;
    const totalExpenseInt = parseInt(totalExpenseString);
    // console.log(totalExpenseInt);

    const managerExpenseField = document.getElementById('manager-expense-field');
    const managerExpenseString = managerExpenseField.value;
    const managerExpenseInt = parseInt(managerExpenseString);
    // console.log(managerExpense);

    const coachExpenseField = document.getElementById('coach-expense-field');
    const coachExpenseString = coachExpenseField.value;
    const coachExpenseInt = parseInt(coachExpenseString);
    // console.log(coachExpense);
    const totalAmount = totalExpenseInt + managerExpenseInt + coachExpenseInt;
    // console.log(totalAmount);
    // console.log(coachExpenseInt);
    // console.log(managerExpenseInt);
    const totalAmountField = document.getElementById('total-amount');
    totalAmountField.innerText = totalAmount;

})
