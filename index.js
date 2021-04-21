// login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = "none";
   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = "block";
});

// deposit button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
   const depositNumber = getInputNumber("depositAmount");

   updateSpanTex("currentDeposit", depositNumber);
   updateSpanTex("currentBalance", depositNumber);

   document.getElementById("depositAmount").value = "";

})

// withdraw button event handler 

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
   const withdrawNumber = getInputNumber("withdrawAmount");

   updateSpanTex("currentWithdraw", withdrawNumber);
   updateSpanTex("currentBalance", -1 * withdrawNumber);
  
   document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
   const Amount = document.getElementById(id).value;
   const amountNumber = parseFloat(Amount);
   return amountNumber;
}

function updateSpanTex(id, addedNumber) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = addedNumber + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}