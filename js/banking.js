

document.getElementById('deposit-button').addEventListener('click', function(){
    //get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputNumber = parseFloat(depositInputText);

    // deposit display
    const depositTotalfield = document.getElementById('deposit-total');
    const depositTotalText = depositTotalfield.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);

    const depositeTotal = depositInputNumber + depositTotalNumber;
   
    depositTotalfield.innerText = depositeTotal;

    // Get Balance 
    const balaceTotalInput = document.getElementById('balace-total');
    const balaceTotalText = balaceTotalInput.innerText;
    const balaceTotalNumber = parseFloat(balaceTotalText);

    const newBalanceTotal = depositInputNumber + balaceTotalNumber;

    balaceTotalInput.innerText = newBalanceTotal;

    depositInput.value = ''; 
});

document.getElementById('withdra-button').addEventListener('click', function(){
    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputText);

    const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotalField.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalText);

    const withdrawTotal = withdrawInputNumber + withdrawTotalNumber;

    withdrawTotalField.innerText = withdrawTotal;

    // Balance new 
    const balaceTotalInput = document.getElementById('balace-total');
    const balaceTotalText = balaceTotalInput.innerText;
    const balaceTotalNumber = parseFloat(balaceTotalText);

    const newBalanceTotal = balaceTotalNumber - withdrawInputNumber;

    balaceTotalInput.innerText = newBalanceTotal;

    withdrawInput.value = '';
});