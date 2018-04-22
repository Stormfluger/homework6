'use strict'

const listBlock = document.querySelector('.list-block'),
      items = listBlock.querySelectorAll('input[type="checkbox"]'),
      result = document.querySelector('output');

function checkValue() {
  result.value = `${Array.from(items).filter(item => item.checked).length} из ${items.length}`;
  listBlock.classList.toggle('complete', (Array.from(items).filter(item => item.checked).length === items.length));
}

checkValue();

for (const item of items) {
  item.addEventListener('click', checkValue);
}

