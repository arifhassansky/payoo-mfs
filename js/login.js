document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (phoneNumber === "5" && pinNumber === "1234") {
    window.location.href = "payoo-home.html";
  } else {
    alert("Your Phone number or Pin is wrong");
  }
});
