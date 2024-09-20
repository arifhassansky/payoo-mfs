document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let addAmountField = getInputValueById("add-amount-field");
    let pinNumber = getInputValueById("pin-input-field");

    if (isNaN(addAmountField)) {
      alert("Enter Right Amount");
      return;
    }
    if (pinNumber === 1234) {
      let totalAmount = getInputTextById("total-amount");
      let newMoney = totalAmount + addAmountField;
      document.getElementById("total-amount").innerText = newMoney;

      // add transection history
      const div = document.createElement("div");
      div.classList.add("bg-green-300");
      div.classList.add("p-4");
      div.innerHTML = `
        <h4 class="text-bold text-2xl ">Add money</h4>
        <p>Cashout ${addAmountField} successful. Balance now: ${newMoney} Tk.</p>
      `;
      document.getElementById("transection").appendChild(div);
    } else {
      alert("Your PIN is wrong");
    }
  });
