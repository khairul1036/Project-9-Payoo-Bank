document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = getInputValueById('add-money-amount-input');
        const pinNumber = getInputValueById('pin-number-input');

        if(isNaN(addMoney) || isNaN(pinNumber)){
            return;
        }

        if(pinNumber === 1234){
            const currentBalance = getCurrentBalanceById('current-balance');
            const newBalace = currentBalance + addMoney;
            document.getElementById('current-balance').innerText = newBalace;
        }
        else{
            alert('Bad PIN...');
        }
    });