function getInputValueById(id){
    const inputVlaue = parseFloat(document.getElementById(id).value);
    return inputVlaue;
}

function getCurrentBalanceById(id){
    const currentBalance = parseFloat(document.getElementById(id).innerText);
    return currentBalance;
}

