function getInputValueById(id){
    const inputVlaue = parseFloat(document.getElementById(id).value);
    return inputVlaue;
}

function getCurrentBalanceById(id){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    return currentBalance;
}

function showForm(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');

    // show form 
    document.getElementById(id).classList.remove('hidden');
}