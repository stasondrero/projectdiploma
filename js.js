const button = document.querySelector('input.button');
const paragraph = document.querySelector('h1.table-state');

button.addEventListener('click', updateButton, false); 

function updateButton(){
  if (button.value === 'Locked'){
    button.value = 'Unlocked';
    paragraph.textContent = 'Вільно';
    paragraph.setAttribute("id", "classGreen");
    button.setAttribute("id", "classGreen");
}
  else{
    button.value = 'Locked';
    paragraph.textContent = 'Занято';
    paragraph.setAttribute("id", "classRed");
    button.setAttribute("id", "classRed");
  }
} 
  