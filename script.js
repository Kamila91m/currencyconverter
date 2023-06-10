let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");

let rateEur = 4.58;
let rateUsd = 4.15;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyElement.value;
  let amount = amountElement.value;
  let pln = plnElement.value;

  switch (currency) {
    case "EUR":
      pln = amount * rateEur;
      break;

    case "USD":
      pln = amount * rateUsd;
      break;
  }

  plnElement.innerText = pln.toFixed(2);
});

let buttonElement = document.querySelector(".js-button");

buttonElement.addEventListener("click", () => {
  console.log("click");
});
