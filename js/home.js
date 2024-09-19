document.getElementById('btn-add-money-input')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const amountInput = parseFloat(document.getElementById('amount-input').value);
        const pinInput = document.getElementById('pin-input').value;

        const preAmount = parseFloat(document.getElementById('pre-amount').innerText);
        
        if(pinInput === '1234'){
            const newAmount = preAmount + amountInput;
            document.getElementById('pre-amount').innerText = newAmount;
            alert('Add money Successful');
        }
        else{
            alert('Wrong Input!');
        }
    })