
// function getInputFieldValueById(){
//     console.log('function click')

//     const addMoney = document.getElementById('input-add-money').value;

//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
     
}