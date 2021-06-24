const button1 = document.querySelector('#button1');
const paragraph1 = document.querySelector('#state1');
const orderDate1 = document.querySelector('#order-date1');
const orderTime1 = document.querySelector('#order-time1');
const orderConfirm1 = document.querySelector('#order-confirm1');
const resetButton1 = document.querySelector('#reset-button1');

const button2 = document.querySelector('#button2');
const paragraph2 = document.querySelector('#state2');
const orderDate2 = document.querySelector('#order-date2');
const orderTime2 = document.querySelector('#order-time2');
const orderConfirm2 = document.querySelector('#order-confirm2');
const resetButton2 = document.querySelector('#reset-button2');

const button3 = document.querySelector('#button3');
const paragraph3 = document.querySelector('#state3');
const orderDate3 = document.querySelector('#order-date3');
const orderTime3 = document.querySelector('#order-time3');
const orderConfirm3 = document.querySelector('#order-confirm3');
const resetButton3 = document.querySelector('#reset-button3');

const button4 = document.querySelector('#button4');
const paragraph4 = document.querySelector('#state4');
const orderDate4 = document.querySelector('#order-date4');
const orderTime4 = document.querySelector('#order-time4');
const orderConfirm4 = document.querySelector('#order-confirm4');
const resetButton4 = document.querySelector('#reset-button4');

const button5 = document.querySelector('#button5');
const paragraph5 = document.querySelector('#state5');
const orderDate5 = document.querySelector('#order-date5');
const orderTime5 = document.querySelector('#order-time5');
const orderConfirm5 = document.querySelector('#order-confirm5');
const resetButton5 = document.querySelector('#reset-button5');

const button6 = document.querySelector('#button6');
const paragraph6 = document.querySelector('#state6');
const orderDate6 = document.querySelector('#order-date6');
const orderTime6 = document.querySelector('#order-time6');
const orderConfirm6 = document.querySelector('#order-confirm6');
const resetButton6 = document.querySelector('#reset-button6');

orderConfirm1.addEventListener('click', order1, false);
orderConfirm2.addEventListener('click', order2, false);
orderConfirm3.addEventListener('click', order3, false);
orderConfirm4.addEventListener('click', order4, false);
orderConfirm5.addEventListener('click', order5, false);
orderConfirm6.addEventListener('click', order6, false);

resetButton1.addEventListener('click', resetTimer1, false);
resetButton2.addEventListener('click', resetTimer2, false);
resetButton3.addEventListener('click', resetTimer3, false);
resetButton4.addEventListener('click', resetTimer4, false);
resetButton5.addEventListener('click', resetTimer5, false);
resetButton6.addEventListener('click', resetTimer6, false);

function order1(){
  if(orderDate1.value == date){
    paragraph1.textContent = 'Заброньовано';
    paragraph1.setAttribute("id", "classOrder");
    button1.setAttribute("id", "classOrder");
  }
  if(orderDate1.value != date){
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen");
  }
}

function order2(){
  if(orderDate2.value == date){
    paragraph2.textContent = 'Заброньовано';
    paragraph2.setAttribute("id", "classOrder");
    button2.setAttribute("id", "classOrder");
  }
  if(orderDate2.value != date){
    paragraph2.textContent = 'Вільно';
    paragraph2.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen");
  }
}

function order3(){
  if(orderDate3.value == date){
    paragraph3.textContent = 'Заброньовано';
    paragraph3.setAttribute("id", "classOrder");
    button3.setAttribute("id", "classOrder");
  }
  if(orderDate3.value != date){
    paragraph3.textContent = 'Вільно';
    paragraph3.setAttribute("id", "classGreen");
    button3.setAttribute("id", "classGreen");
  }
}

function order4(){
  if(orderDate4.value == date){
    paragraph4.textContent = 'Заброньовано';
    paragraph4.setAttribute("id", "classOrder");
    button4.setAttribute("id", "classOrder");
  }
  if(orderDate4.value != date){
    paragraph4.textContent = 'Вільно';
    paragraph4.setAttribute("id", "classGreen");
    button4.setAttribute("id", "classGreen");
  }
}

function order5(){
  if(orderDate5.value == date){
    paragraph5.textContent = 'Заброньовано';
    paragraph5.setAttribute("id", "classOrder");
    button5.setAttribute("id", "classOrder");
  }
  if(orderDate5.value != date){
    paragraph5.textContent = 'Вільно';
    paragraph5.setAttribute("id", "classGreen");
    button5.setAttribute("id", "classGreen");
  }
}

function order6(){
  if(orderDate6.value == date){
    paragraph6.textContent = 'Заброньовано';
    paragraph6.setAttribute("id", "classOrder");
    button6.setAttribute("id", "classOrder");
  }
  if(orderDate6.value != date){
    paragraph6.textContent = 'Вільно';
    paragraph6.setAttribute("id", "classGreen");
    button6.setAttribute("id", "classGreen");
  }
}

function resetTimer1(){
    paragraph1.textContent = 'Вільно';
    paragraph1.setAttribute("id", "classGreen");
    button1.setAttribute("id", "classGreen"); 
}
function resetTimer2(){
    paragraph2.textContent = 'Вільно';
    paragraph2.setAttribute("id", "classGreen");
    button2.setAttribute("id", "classGreen"); 
}
function resetTimer3(){
    paragraph3.textContent = 'Вільно';
    paragraph3.setAttribute("id", "classGreen");
    button3.setAttribute("id", "classGreen"); 
}
function resetTimer4(){
    paragraph4.textContent = 'Вільно';
    paragraph4.setAttribute("id", "classGreen");
    button4.setAttribute("id", "classGreen"); 
}
function resetTimer5(){
    paragraph5.textContent = 'Вільно';
    paragraph5.setAttribute("id", "classGreen");
    button5.setAttribute("id", "classGreen"); 
}
function resetTimer6(){
    paragraph6.textContent = 'Вільно';
    paragraph6.setAttribute("id", "classGreen");
    button6.setAttribute("id", "classGreen"); 
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
  var date = todayMonth+ '/' +todayDay+ '/' +today.getFullYear();
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