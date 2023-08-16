// step-1: add event handler with the withdraw button
// step-2: get the withdraw amount from the withdraw input field
// step-3: get Previous withdraw total
// step-4: calculate total withdraw amount
// step-5: get the previous balance total
// step-6: calculate the new balance total
// step-7: set the new balance total

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';    
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
   
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   
    if(newWithdrawAmount > previousBalanceTotal) {
        alert('Please check the amount. There is not enough  money in your account.');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
  
    

})