document.getElementById('btn-deposite').addEventListener('click',function(){
  const depositeField = document.getElementById('deposite-field');
  const depositeAmmount = depositeField.value;
  const depositeAmmountNum = parseFloat(depositeAmmount);

 const depositeTotalAmmonut = document.getElementById('deposite-total-ammount')
 const depositeTotal = depositeTotalAmmonut.innerText;
 const depositeTotalNum = parseFloat(depositeTotal)
 const result = depositeAmmountNum+depositeTotalNum;
   depositeTotalAmmonut.innerText = result;

   const totalBalance = document.getElementById('balance-total')
   const totalBalanceString = totalBalance.innerText;
   const totalBalanceNum = parseFloat(totalBalanceString);
   const currentTotalBalance = totalBalanceNum+result;
   totalBalance.innerText =currentTotalBalance;



   depositeField.value='';


})