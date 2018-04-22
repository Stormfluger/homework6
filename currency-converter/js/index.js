'use strict'

const XHR = new XMLHttpRequest();
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const result = document.getElementById('result');
const source = document.getElementById('source');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');

XHR.addEventListener('load', runConverter);

fromCurrency.addEventListener('change', () => {
  convertCurrency(fromCurrency, toCurrency);
});

toCurrency.addEventListener('change', () => {
  convertCurrency(fromCurrency, toCurrency);
});

source.addEventListener('input', () => {
  convertCurrency(fromCurrency, toCurrency);
});

XHR.open('GET', 'https://neto-api.herokuapp.com/currency');
XHR.send();

loader.classList.remove('hidden');


function runConverter(event) {
  if (event.target.status === 200) {
    const response = JSON.parse(event.target.responseText);

    content.classList.remove('hidden');
    loader.classList.add('hidden');

    onLoad(response);
  }
}

function onLoad(data) {
  for (let item of data) {
    const optionFromTo = `<option value="${item.value}">${item.code}</option>`;

    fromCurrency.innerHTML += optionFromTo;
    toCurrency.innerHTML += optionFromTo;

    convertCurrency(fromCurrency, toCurrency);
  }
}

function convertCurrency(from, to) {
  const countFrom = source.value * from.value;
  const fromCurrency = from.options[from.selectedIndex].innerHTML;
  const toCurrency = to.options[to.selectedIndex].innerHTML;

  result.value = `${source.value} ${fromCurrency} => ${(countFrom / to.value).toFixed(2)} ${toCurrency}`;
}
