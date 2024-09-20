document
  .getElementById("cashout-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let cashout = getInputValueById("cashout-amount-field");
    let pinNumber = getInputValueById("cashout-pin-input-field");

    if (isNaN(cashout)) {
      alert("Enter Right Amount");
      return;
    }

    if (pinNumber === 1234) {
      const totalAmount = getInputTextById("total-amount");
      if (cashout > totalAmount) {
        alert("You have not enough balance");
        return;
      }
      const newAmount = totalAmount - cashout;
      document.getElementById("total-amount").innerText = newAmount;

      // add transection history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.classList.add("p-4");
      div.innerHTML = `
        <h4 class="text-bold text-2xl ">Cashout</h4>
        <p>Cashout ${cashout} successful. Balance now: ${newAmount} Tk.</p>
      `;
      document.getElementById("transection").appendChild(div);
    } else {
      alert("Your PIN is wrong");
    }
  });
