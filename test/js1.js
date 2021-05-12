const button = document.querySelector('#button1');
const paragraph = document.querySelector('#state1');
const resetButton = document.querySelector('.reset-button');

button.addEventListener('click', updateButton, false);

resetButton.addEventListener('click', resetTimer, false); 

function updateButton(){
  if (paragraph.textContent === 'Вільно'){
    paragraph.textContent = 'Занято';
    paragraph.setAttribute("id", "classRed");
    button.setAttribute("id", "classRed");
    mySeconds = 0;   
}
  else{
    paragraph.textContent = 'Занято';
    paragraph.setAttribute("id", "classRed");
    button.setAttribute("id", "classGreen");  
  }
} 


var mySeconds;
var intervalHandle;


function resetPage(){
  document.getElementById("input1").style.display="none";  
}


function resetTimer(){
    mySeconds = 0;
    paragraph.textContent = 'Вільно';
    paragraph.setAttribute("id", "classGreen");
    button.setAttribute("id", "classGreen");
    
} 


function tick(){
  var timeDisplay = document.getElementById("time");
  
  var min = Math.floor(mySeconds/60);
  var sec = mySeconds - (min*60);
  
  if (sec < 10){
    sec = "0" +sec;
  }
  
  var message = min.toString()+":"+sec;
  
  timeDisplay.innerHTML = message;
  
  if(mySeconds === 0){
    clearInterval (intervalHandle);
    paragraph.textContent = 'Вільно';
    paragraph.setAttribute("id", "classGreen");
    button.setAttribute("id", "classGreen");
  }

  mySeconds --; 
}


function startCounter(){
  var myInput = document.getElementById("minutes").value;

  if (isNaN(myInput)){
    alert ("Введіть число");
    paragraph.textContent = 'Занято';
    paragraph.setAttribute("id", "classRed");
    button.setAttribute("id", "classRed");
    return;
  }

  mySeconds = myInput*60;
  intervalHandle = setInterval(tick, 1000);
}


window.onload = function(){
  var myInput = document.querySelector(".input-time");

  myInput.setAttribute("type","text");
  myInput.setAttribute("id","minutes");

  

  var myButton = document.querySelector(".button");
  
  myButton.onclick = function(){
    startCounter();  
  }
}
function asdfg(){
  var timeNow = document.getElementById("span-timeNow");
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var dateTime =  time+ ' ' + date;
  var timeChange = timeNow.textContent = dateTime;
}
asdfg();
var qwerty = setInterval(asdfg,1000);
