document.getElementById('btn-cash-out')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const cashoutMoney = getInputValueById('cashout-amount-input');
        const pinNumber = getInputValueById('pin-cashout-input');

        if(isNaN(cashoutMoney) || isNaN(pinNumber)){
            return;
        }
        
        if(pinNumber === 1234){
            const currentBalance = getCurrentBalanceById('current-balance');
            if(cashoutMoney > currentBalance){
                alert('Balance kom.! Recharge kor age..');
                return;
            }
            const newBalace = currentBalance - cashoutMoney;
            document.getElementById('current-balance').innerText = newBalace;
        }
        else{
            alert('Bad PIN...');
        }
    });