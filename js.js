const button1 = document.querySelector('#button1');
const paragraph1 = document.querySelector('#state1');
const resetButton1 = document.querySelector('#reset-button1');
const orderDate1 = document.querySelector('#order-date1');
const orderConfirm1 = document.querySelector('#order-confirm1');

const button2 = document.querySelector('#button2');
const paragraph2 = document.querySelector('#state2');
const resetButton2 = document.querySelector('#reset-button2');

const button3 = document.querySelector('#button3');
const paragraph3 = document.querySelector('#state3');
const resetButton3 = document.querySelector('#reset-button3');

const button4 = document.querySelector('#button4');
const paragraph4 = document.querySelector('#state4');
const resetButton4 = document.querySelector('#reset-button4');

const button5 = document.querySelector('#button5');
const paragraph5 = document.querySelector('#state5');
const resetButton5 = document.querySelector('#reset-button5');

const button6 = document.querySelector('#button6');
const paragraph6 = document.querySelector('#state6');
const resetButton6 = document.querySelector('#reset-button6');

button1.addEventListener('click', updateButton1, false);
resetButton1.addEventListener('click', resetTimer1, false); 
orderConfirm1.addEventListener('click', order1, false);

button2.addEventListener('click', updateButton2, false);
resetButton2.addEventListener('click', resetTimer2, false);

button3.addEventListener('click', updateButton3, false);
resetButton3.addEventListener('click', resetTimer3, false);

button4.addEventListener('click', updateButton4, false);
resetButton4.addEventListener('click', resetTimer4, false);

button5.addEventListener('click', updateButton5, false);
resetButton5.addEventListener('click', resetTimer5, false);

button6.addEventListener('click', updateButton6, false);
resetButton6.addEventListener('click', resetTimer6, false);

function order1(){
  if(orderDate1.value == date){
    paragraph1.textContent = 'Заброньовано';
    paragraph1.setAttribute("id", "classOrder");
    button1.setAttribute("id", "displayNone");
    mySeconds1 = 0;
  }
  else if(orderDate1.value != date){
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen");
    mySeconds1 = 0;
  }
}

function updateButton1(){
  if (paragraph1.textContent === 'Вільно'){
    paragraph1.textContent = 'Занято';
    paragraph1.setAttribute("id", "classRed");
    button1.setAttribute("id", "displayNone");
    mySeconds1 = 0;   
}
  else if (paragraph1.textContent === 'Занято'){
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen");  
  }
} 

function updateButton2(){
  if (paragraph2.textContent === 'Вільно'){
    paragraph2.textContent = 'Занято';
    paragraph2.setAttribute("id", "classRed");
    button2.setAttribute("id", "displayNone");
    mySeconds2 = 0;   
}
  else if (paragraph2.textContent === 'Занято'){
    paragraph2.textContent = 'Вільно';
    paragraph2.setAttribute("id", "classGreen");
    button2.setAttribute("id", "classGreen");  
  }
} 

function updateButton3(){
  if (paragraph3.textContent === 'Вільно'){
    paragraph3.textContent = 'Занято';
    paragraph3.setAttribute("id", "classRed");
    button3.setAttribute("id", "displayNone");
    mySeconds3 = 0;   
}
  else if (paragraph3.textContent === 'Занято'){
    paragraph3.textContent = 'Вільно';
    paragraph3.setAttribute("id", "classGreen");
    button3.setAttribute("id", "classGreen");  
  }
} 

function updateButton4(){
  if (paragraph4.textContent === 'Вільно'){
    paragraph4.textContent = 'Занято';
    paragraph4.setAttribute("id", "classRed");
    button4.setAttribute("id", "displayNone");
    mySeconds4 = 0;   
}
  else if (paragraph4.textContent === 'Занято'){
    paragraph4.textContent = 'Вільно';
    paragraph4.setAttribute("id", "classGreen");
    button4.setAttribute("id", "classGreen");  
  }
} 

function updateButton5(){
  if (paragraph5.textContent === 'Вільно'){
    paragraph5.textContent = 'Занято';
    paragraph5.setAttribute("id", "classRed");
    button5.setAttribute("id", "displayNone");
    mySeconds5 = 0;   
}
  else if (paragraph5.textContent === 'Занято'){
    paragraph5.textContent = 'Вільно';
    paragraph5.setAttribute("id", "classGreen");
    button5.setAttribute("id", "classGreen");  
  }
} 

function updateButton6(){
  if (paragraph6.textContent === 'Вільно'){
    paragraph6.textContent = 'Занято';
    paragraph6.setAttribute("id", "classRed");
    button6.setAttribute("id", "displayNone");
    mySeconds6 = 0;   
}
  else if (paragraph6.textContent === 'Занято'){
    paragraph6.textContent = 'Вільно';
    paragraph6.setAttribute("id", "classGreen");
    button6.setAttribute("id", "classGreen");  
  }
} 


var mySeconds1;
var intervalHandle1;

var mySeconds2;
var intervalHandle2;

var mySeconds3;
var intervalHandle3;

var mySeconds4;
var intervalHandle4;

var mySeconds5;
var intervalHandle5;

var mySeconds6;
var intervalHandle6;


function resetTimer1(){
    mySeconds1 = 0;
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen"); 
}
function resetTimer2(){
    mySeconds2 = 0;
    paragraph2.textContent = 'Вільно';
    paragraph2.setAttribute("id", "classGreen");
    button2.setAttribute("id", "classGreen"); 
}
function resetTimer3(){
    mySeconds3 = 0;
    paragraph3.textContent = 'Вільно';
    paragraph3.setAttribute("id", "classGreen");
    button3.setAttribute("id", "classGreen"); 
}
function resetTimer4(){
    mySeconds4 = 0;
    paragraph4.textContent = 'Вільно';
    paragraph4.setAttribute("id", "classGreen");
    button4.setAttribute("id", "classGreen"); 
}
function resetTimer5(){
    mySeconds5 = 0;
    paragraph5.textContent = 'Вільно';
    paragraph5.setAttribute("id", "classGreen");
    button5.setAttribute("id", "classGreen"); 
}
function resetTimer6(){
    mySeconds6 = 0;
    paragraph6.textContent = 'Вільно';
    paragraph6.setAttribute("id", "classGreen");
    button6.setAttribute("id", "classGreen"); 
}

function resetPage(){
  document.getElementById("input1").style.display="none";  
}


function startCounter1(){
  var myInput1 = document.getElementById("minutes1").value;

  if (isNaN(myInput1)){
    alert ("Введіть число");
    paragraph1.textContent = 'Занято';
    paragraph1.setAttribute("id", "classRed");
    button1.setAttribute("id", "classRed");
    return;
  }

  mySeconds1 = myInput1*60;
  intervalHandle1 = setInterval(tick1, 1000);
}

function tick1(){
  var timeDisplay1 = document.getElementById("time1");
  
  var min1 = Math.floor(mySeconds1/60);
  var sec1 = mySeconds1 - (min1*60);
  
  if (sec1 < 10){
    sec1 = "0" +sec1;
  }
  
  var message1 = min1.toString()+":"+sec1;
  
  timeDisplay1.innerHTML = message1;
  
  if(mySeconds1 === 0){
    clearInterval (intervalHandle1);
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen");
  }

  mySeconds1 --; 
}


function startCounter2(){
  var myInput2 = document.getElementById("minutes2").value;

  if (isNaN(myInput2)){
    alert ("Введіть число");
    paragraph2.textContent = 'Занято';
    paragraph2.setAttribute("id", "classRed");
    button2.setAttribute("id", "classRed");
    return;
  }

  mySeconds2 = myInput2*60;
  intervalHandle2 = setInterval(tick2, 1000);
}

function tick2(){
  var timeDisplay2 = document.getElementById("time2");
  
  var min2 = Math.floor(mySeconds2/60);
  var sec2 = mySeconds2 - (min2*60);
  
  if (sec2 < 10){
    sec2 = "0" +sec2;
  }
  
  var message2 = min2.toString()+":"+sec2;
  
  timeDisplay2.innerHTML = message2;
  
  if(mySeconds2 === 0){
    clearInterval (intervalHandle2);
    paragraph2.textContent = 'Вільно';
    paragraph2.setAttribute("id", "classGreen");
    button2.setAttribute("id", "classGreen");
  }

  mySeconds2 --; 
}


function startCounter3(){
  var myInput3 = document.getElementById("minutes3").value;

  if (isNaN(myInput3)){
    alert ("Введіть число");
    paragraph3.textContent = 'Занято';
    paragraph3.setAttribute("id", "classRed");
    button3.setAttribute("id", "classRed");
    return;
  }

  mySeconds3 = myInput3*60;
  intervalHandle3 = setInterval(tick3, 1000);
}

function tick3(){
  var timeDisplay3 = document.getElementById("time3");
  
  var min3 = Math.floor(mySeconds3/60);
  var sec3 = mySeconds3 - (min3*60);
  
  if (sec3 < 10){
    sec3 = "0" +sec3;
  }
  
  var message3 = min3.toString()+":"+sec3;
  
  timeDisplay3.innerHTML = message3;
  
  if(mySeconds3 === 0){
    clearInterval (intervalHandle3);
    paragraph3.textContent = 'Вільно';
    paragraph3.setAttribute("id", "classGreen");
    button3.setAttribute("id", "classGreen");
  }

  mySeconds3 --; 
}


function startCounter4(){
  var myInput4 = document.getElementById("minutes4").value;

  if (isNaN(myInput4)){
    alert ("Введіть число");
    paragraph4.textContent = 'Занято';
    paragraph4.setAttribute("id", "classRed");
    button4.setAttribute("id", "classRed");
    return;
  }

  mySeconds4 = myInput4*60;
  intervalHandle4 = setInterval(tick4, 1000);
}

function tick4(){
  var timeDisplay4 = document.getElementById("time4");
  
  var min4 = Math.floor(mySeconds4/60);
  var sec4 = mySeconds4 - (min4*60);
  
  if (sec4 < 10){
    sec4 = "0" +sec4;
  }
  
  var message4 = min4.toString()+":"+sec4;
  
  timeDisplay4.innerHTML = message4;
  
  if(mySeconds4 === 0){
    clearInterval (intervalHandle4);
    paragraph4.textContent = 'Вільно';
    paragraph4.setAttribute("id", "classGreen");
    button4.setAttribute("id", "classGreen");
  }

  mySeconds4 --; 
}


function startCounter5(){
  var myInput5 = document.getElementById("minutes5").value;

  if (isNaN(myInput5)){
    alert ("Введіть число");
    paragraph5.textContent = 'Занято';
    paragraph5.setAttribute("id", "classRed");
    button5.setAttribute("id", "classRed");
    return;
  }

  mySeconds5 = myInput5*60;
  intervalHandle5 = setInterval(tick5, 1000);
}

function tick5(){
  var timeDisplay5 = document.getElementById("time5");
  
  var min5 = Math.floor(mySeconds5/60);
  var sec5 = mySeconds5 - (min5*60);
  
  if (sec5 < 10){
    sec5 = "0" +sec5;
  }
  
  var message5 = min5.toString()+":"+sec5;
  
  timeDisplay5.innerHTML = message5;
  
  if(mySeconds5 === 0){
    clearInterval (intervalHandle5);
    paragraph5.textContent = 'Вільно';
    paragraph5.setAttribute("id", "classGreen");
    button5.setAttribute("id", "classGreen");
  }

  mySeconds5 --; 
}


function startCounter6(){
  var myInput6 = document.getElementById("minutes6").value;

  if (isNaN(myInput6)){
    alert ("Введіть число");
    paragraph6.textContent = 'Занято';
    paragraph6.setAttribute("id", "classRed");
    button6.setAttribute("id", "classRed");
    return;
  }

  mySeconds6 = myInput6*60;
  intervalHandle6 = setInterval(tick6, 1000);
}

function tick6(){
  var timeDisplay6 = document.getElementById("time6");
  
  var min6 = Math.floor(mySeconds6/60);
  var sec6 = mySeconds6 - (min6*60);
  
  if (sec6 < 10){
    sec6 = "0" +sec6;
  }
  
  var message6 = min6.toString()+":"+sec6;
  
  timeDisplay6.innerHTML = message6;
  
  if(mySeconds6 === 0){
    clearInterval (intervalHandle6);
    paragraph6.textContent = 'Вільно';
    paragraph6.setAttribute("id", "classGreen");
    button6.setAttribute("id", "classGreen");
  }

  mySeconds6 --; 
}


window.onload = function(){
  var myInput1 = document.getElementById("input1");

  myInput1.setAttribute("type","text");
  myInput1.setAttribute("id","minutes1");

  var myButton1 = document.getElementById("button1");
  
  myButton1.onclick = function(){
    startCounter1();  
  }
  var myInput2 = document.getElementById("input2");

  myInput2.setAttribute("type","text");
  myInput2.setAttribute("id","minutes2");

  var myButton2 = document.getElementById("button2");
  
  myButton2.onclick = function(){
    startCounter2();  
  }
  var myInput3 = document.getElementById("input3");

  myInput3.setAttribute("type","text");
  myInput3.setAttribute("id","minutes3");

  var myButton3 = document.getElementById("button3");
  
  myButton3.onclick = function(){
    startCounter3();  
  }
  var myInput4 = document.getElementById("input4");

  myInput4.setAttribute("type","text");
  myInput4.setAttribute("id","minutes4");

  var myButton4 = document.getElementById("button4");
  
  myButton4.onclick = function(){
    startCounter4();  
  }
  var myInput5 = document.getElementById("input5");

  myInput5.setAttribute("type","text");
  myInput5.setAttribute("id","minutes5");

  var myButton5 = document.getElementById("button5");
  
  myButton5.onclick = function(){
    startCounter5();  
  }
  var myInput6 = document.getElementById("input6");

  myInput6.setAttribute("type","text");
  myInput6.setAttribute("id","minutes6");

  var myButton6 = document.getElementById("button6");
  
  myButton6.onclick = function(){
    startCounter6();  
  }
}
  
  var today = new Date();
  var timeNow = document.getElementById("span-timeNow");
  var todayHours = today.getHours();
  var todayMinutes = today.getMinutes();
  var todaySeconds = today.getSeconds();
  var todayMonth = today.getMonth() + 1;
  var todayDay = today.getDate();

  if(todayHours < 10){
    todayHours = "0" + todayHours;
  }
  if(todayMinutes < 10){
    todayMinutes = "0" + todayMinutes;
  }
  if(todaySeconds < 10){
    todaySeconds = "0" + todaySeconds;
  }
  if(todayMonth < 10){
    todayMonth = "0" + todayMonth;
  }
  if(todayDay < 10){
    todayDay = "0" + todayDay;
  }
  var time = todayHours + ":" + todayMinutes + ":" + todaySeconds;
  var date = todayMonth+'/'+todayDay+'/'+today.getFullYear();
  var dateTime =  time+ ' ' + date;
  var timeChange = timeNow.textContent = dateTime;
  
function showTimeNow(){
  var today = new Date();
  var timeNow = document.getElementById("span-timeNow");
  var todayHours = today.getHours();
  var todayMinutes = today.getMinutes();
  var todaySeconds = today.getSeconds();
  var todayMonth = today.getMonth() + 1;
  var todayDay = today.getDate();

  if(todayHours < 10){
    todayHours = "0" + todayHours;
  }
  if(todayMinutes < 10){
    todayMinutes = "0" + todayMinutes;
  }
  if(todaySeconds < 10){
    todaySeconds = "0" + todaySeconds;
  }
  if(todayMonth < 10){
    todayMonth = "0" + todayMonth;
  }
  if(todayDay < 10){
    todayDay = "0" + todayDay;
  }
  var time = todayHours + ":" + todayMinutes + ":" + todaySeconds;
  var date = todayDay +'-'+ todayMonth +'-'+ today.getFullYear();
  var dateTime =  time+ ' ' + date;
  var timeChange = timeNow.textContent = dateTime;
}
showTimeNow();
var showTimeNowInterval = setInterval(showTimeNow,1000);