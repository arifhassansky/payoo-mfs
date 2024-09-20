function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const valueNumber = parseFloat(value);
  return valueNumber;
}
function getInputTextById(id) {
  const value = document.getElementById(id).innerText;
  const valueNumber = parseFloat(value);
  return valueNumber;
}
function showSection(id) {
  document.getElementById("addmoney-form").classList.add("hidden");
  document.getElementById("withdraw-form").classList.add("hidden");
  document.getElementById("transection").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
