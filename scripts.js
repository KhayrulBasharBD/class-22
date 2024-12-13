var totalIncome = 0;
var totalExpense = 0;
var errorIncome = document.getElementById('errorIncome');
var errorExpense = document.getElementById('errorExpense');
var updateMessage = document.getElementById('updateMessage');
errorIncome.style.display = 'none';
errorExpense.style.display = 'none';
updateMessage.style.display = 'none';

function addIncome(){
    const incomeInput = document.getElementById('income');
    const incomeValue = +incomeInput.value || 0;
    errorExpense.style.display = 'none';
    if(incomeValue === 0){
        errorIncome.style.display = 'block';
        errorIncome.textContent = 'Please enter greater than 0.';
        incomeInput.value = '';
        updateMessage.style.display = 'none';
        return;
    }
    if(incomeValue < 0){
        errorIncome.style.display = 'block';
        errorIncome.style.background = 'red';
        errorIncome.textContent = 'Sorry, you entered less than 1';
        incomeInput.value = '';
        updateMessage.style.display = 'none';
        return;
    }


    totalIncome += incomeValue;
    errorIncome.style.display = 'block';
    errorIncome.textContent = 'Your income value successfully added.'
    errorIncome.style.backgroundColor = 'green';
    const incomeOutput = document.getElementById('total-income');
    incomeOutput.textContent = totalIncome.toFixed(2);

    updateBalance();
    incomeInput.value = '';
}

function addExpense(){
    const expenseInput = document.getElementById('expense');
    const expenseValue = +expenseInput.value || 0;
    errorIncome.style.display = 'none';
    if(expenseValue > totalIncome - totalExpense ){
        updateMessage.style.display = 'none';
        errorExpense.style.display = 'block';
        errorExpense.textContent = 'Your balance is low';
        errorExpense.style.backgroundColor = 'red';
        expenseInput.value = '';
        return;
    }

    if(expenseValue <= 0){
        errorExpense.style.display = 'block';
        errorExpense.textContent = 'Sorry! you entered less than 1.';
        errorExpense.style.backgroundColor = 'red';
        expenseInput.value = '';
        updateMessage.style.display = 'none';
        return;
    }
    totalExpense += expenseValue;
    errorExpense.style.display = 'block';
    errorExpense.style.backgroundColor = 'green';
    errorExpense.textContent = 'Your expense value successfully added.';
    const expenseOutput = document.getElementById('total-expense');
    expenseOutput.textContent = totalExpense.toFixed(2);
    updateBalance();
    expenseInput.value = '';
}

function updateBalance(){
    const balance = document.getElementById('balance');
    var finalBalance = (totalIncome -  totalExpense).toFixed(2);
    balance.textContent = finalBalance;
    updateMessage.style.display = 'block';
    updateMessage.textContent = 'Balance has updated!';
    updateMessage.style.color = '#51BE17';
}