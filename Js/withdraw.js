document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawAmmount = document.getElementById('Withdraw-field')
    const withdrawAmmountString = withdrawAmmount.value;
    const withdrawAmmountNum = parseFloat(withdrawAmmountString);



    withdrawAmmount.value ='';
    if(isNaN(withdrawAmmountNum)){
        alert('please provide a number')
        return;

    }

    const withdrawTotalAmmount = document.getElementById('withdraw-ammount')
    const withdrawTotalAmmountStirng = withdrawTotalAmmount.innerText;
    const withdrawTotalAmmountnum= parseFloat(withdrawTotalAmmountStirng);

   
  
  


    




   const totalBalance = document.getElementById('balance-total');
   const totalBalanceString = totalBalance.innerText;
   const totalBalanceNum = parseFloat(totalBalanceString)
  
   if(withdrawAmmountNum>totalBalanceNum){
    alert('tk ase ni eto?');
    return;
   }



   const currentTotalWithdraw = withdrawAmmountNum + withdrawTotalAmmountnum;
   withdrawTotalAmmount.innerText = currentTotalWithdraw;

   const newTotalBalance = totalBalanceNum - currentTotalWithdraw;
   totalBalance.innerText = newTotalBalance
   


  
   


  





})