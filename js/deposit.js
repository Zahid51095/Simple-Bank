// step-1: add eventlistener to the diposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // jehetu new deposit ta string tai setake number e convert korlam

    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current deposti total

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;

    // step-4: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    
    // step-5: clear the deposit field
    depositField.value = '';
    

})