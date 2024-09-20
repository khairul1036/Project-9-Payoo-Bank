document.getElementById('btn-login')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const mobileNumber = document.getElementById('number-input').value;
        const pinNumber = document.getElementById('pin-input').value;

        if(pinNumber === '1234'){
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong number or pin..');
        }
    });