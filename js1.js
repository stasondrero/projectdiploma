const button = document.querySelector('input');
const paragraph = document.querySelector('p');

if(button){
  button.addEventListener('click', updateButton, false);
}


function updateButton() {
  if (button.value === 'Запустить ПК') {
    button.value = 'Выключить ПК';
    paragraph.textContent = 'ПК запущен!';
  } else {
    button.value = 'Запустить ПК';
    paragraph.textContent = 'ПК выключен.';
  }
}