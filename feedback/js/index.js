'use strict'

window.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.contentform');
  const output = document.getElementById('output');
  const inputFormes = form.querySelectorAll('[name]');
  const btnSend = form.querySelector('.button-contact');
  const btnChange = output.querySelector('.button-contact');
  let enteredField = 0;

  for (let input of inputFormes) {
    input.addEventListener('change', (event) => {
      if (event.currentTarget.name !== 'phone' && event.currentTarget.name !== 'email') {
        document.getElementById(event.currentTarget.name).value = event.currentTarget.value;
      }

      event.currentTarget.value !== '' ? enteredField++ : enteredField--;

      if (enteredField === inputFormes.length) {
        btnSend.removeAttribute('disabled');
        form.removeAttribute('novalidate');
        form.setAttribute('validate', '');
      } else {
        btnSend.setAttribute('disabled', '');
        form.setAttribute('novalidate', '');
        form.removeAttribute('validate');
      }
    });

    if (input.name === 'zip') {
      input.addEventListener('input', (event) => {
        event.currentTarget.value = event.currentTarget.value.replace(/\D/, '');
      });
    }
  }

  btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    output.classList.remove('hidden');
  });

  btnChange.addEventListener('click', (event) => {
    event.preventDefault();
    output.classList.add('hidden');
    form.classList.remove('hidden');
  });

});