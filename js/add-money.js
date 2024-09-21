
    document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        // getInputFieldValueById();

        // const addMoney = getInputFieldValueById();
        // console.log('add money value', addMoney);

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        if(pinNumber === 1234){
            const balance = getTextFiledValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance; 
        }
        else{
            alert('Failed to add the money!')
        }


    })