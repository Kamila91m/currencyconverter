{
  const calculateResult = (amount, currency) => {
    const rateEur = 4.58;
    const rateUsd = 4.15;

    switch (currency) {
      case "EUR":
        return amount * rateEur;

      case "USD":
        return amount * rateUsd;
    }
  };

  const updateResultText = (result) => {
    const plnElement = document.querySelector(".js-pln");
    plnElement.innerText = result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");
    let currency = currencyElement.value;
    let amount = amountElement.value;
    const result = calculateResult(amount, currency);

    updateResultText(result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
