document.getElementById("withdraw_btn").addEventListener("click", function () {
  const withdrawAmount = getInputFieldValueById("withdraw_field");
  const withdrawTotalAmount = getElementValueById("withdraw_total");
  const newWithdrawTotal = withdrawAmount + withdrawTotalAmount;
  setTextValueById("withdraw_total", newWithdrawTotal);
  const totalBalance = getElementValueById("total_balance");
  const newTotalBalance = totalBalance - withdrawAmount;
  setTextValueById("total_balance", newTotalBalance);
});
