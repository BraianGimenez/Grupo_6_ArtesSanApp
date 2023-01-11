document.getElementById("cartProductBtn").addEventListener("click", toggleCartProduct);

function toggleCartProduct() {
            const element = document.getElementById("cartProduct");
            if (element.className == "cartProduct") {
              element.className = "toggleCartProduct";
            } else {
              element.className = "cartProduct";
            }
}


// END SHIPPING-----------------------

//SHIPPING
document.getElementById("LocalBtn").addEventListener("click", toggleShippingLocal);

function toggleShippingLocal (){
  const element = document.getElementById("branch");
  if (element.className == "branch"){
    element.className = "branchOpen";
  } else {
    element.className = "branch";
  }
}
document.getElementById("pickUpBtn").addEventListener("click", toggleShippingPickUp);

function toggleShippingPickUp (){
  const element = document.getElementById("pickUp");
  if (element.className == "pickUp"){
    element.className = "pickUpOpen";
  } else {
    element.className = "pickUp";
  }
}
document.getElementById("doorToDoorBtn").addEventListener("click", toggleShipping);

function toggleShipping (){
  const element = document.getElementById("shipping");
  if (element.className == "shipping"){
    element.className = "shippingOpen";
  } else {
    element.className = "shipping";
  }
}
// END SHIPPING-----------------------

// PAYMENT
document.getElementById("cartPaymentCashBtn").addEventListener("click", togglePaymentCash);

function togglePaymentCash (){
  const element = document.getElementById("cartPaymentCash");
  if (element.className == "cartPaymentCash"){
    element.className = "cartPaymentCashOpen";
  } else {
    element.className = "cartPaymentCash";
  }
}

document.getElementById("cartPaymentMercadoPagoBtn").addEventListener("click", togglePaymentMercadoPago);

function togglePaymentMercadoPago (){
  const element = document.getElementById("cartPaymentMercadoPago");
  if (element.className == "cartPaymentMercadoPago"){
    element.className = "cartPaymentMercadoPagoOpen";
  } else {
    element.className = "cartPaymentMercadoPago";
  }
}

document.getElementById("cartPaymentBankBtn").addEventListener("click", togglePaymentBank);

function togglePaymentBank (){
  const element = document.getElementById("cartPaymentBank");
  if (element.className == "cartPaymentBank"){
    element.className = "cartPaymentBankOpen";
  } else {
    element.className = "cartPaymentBank";
  }
}

document.getElementById("cartPaymentCreditCardBtn").addEventListener("click", togglePaymentCreditCard);

function togglePaymentCreditCard (){
  const element = document.getElementById("cartPaymentCreditCard");
  if (element.className == "cartPaymentCreditCard"){
    element.className = "cartPaymentCreditCardOpen";
  } else {
    element.className = "cartPaymentCreditCard";
  }
}

// END PAYMENT-----------------------