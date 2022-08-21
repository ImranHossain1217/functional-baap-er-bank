document.getElementById("deposit_btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit_field");

  const newDepositTotalAmount = getElementValueById("deposit_total");

  const totalDepositAmount = newDepositAmount + newDepositTotalAmount;
  setTextValueById("deposit_total", totalDepositAmount);

  const newTotalBalance = getElementValueById("total_balance");
  const totalBalanceAmount = newDepositAmount + newTotalBalance;
  setTextValueById("total_balance", totalBalanceAmount);
});
