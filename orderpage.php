<!DOCTYPE html>
<html>
	<meta charset="ISO-8859-1">
	<head>
		<title>Order Page</title>
		<link rel = "stylesheet" type = "text/css" href = "style.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">	
	</head>
<body id = 'bg'>

	<div id = 'main-div' align = "center">

		<div id = "div-ordermenu">
			<h2 id = "ordermenu-text">Меню бронювання</h2>
		</div>

		<div id = 'div1' class = "button-div">
			<h1 id = "state1" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">1</h1>
			<input type = "hidden" name = "hidden1" value = "on">
			<input type = "button" name = "button1" value = "" id = "button1" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button1" class = "reset-button"><br>
			<input type = "button" name = "order-date1" value = "Вибрати дату броні" id = "order-date1" class = "order-date"><br>
			<input type = "button" name = "order-time1" value = "Вибрати час броні" id = "order-time1" class = "order-time"><br>
			<input type = "button" name = "order-confirm1" value = "Підтвердити бронь" id = "order-confirm1" class = "order-confirm"><br>
		</div>

		<div id = 'div2' class = "button-div">		
			<h1 id = "state2" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">2</h1>
			<input type = "hidden" name = "hidden2" value = "on">
			<input type = "button" name = "button2" value = "" id = "button2" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button2" class = "reset-button"><br>
			<input type = "button" name = "order-date2" value = "Вибрати дату броні" id = "order-date2" class = "order-date"><br>
			<input type = "button" name = "order-time2" value = "Вибрати час броні" id = "order-time2" class = "order-time"><br>
			<input type = "button" name = "order-confirm2" value = "Підтвердити бронь" id = "order-confirm2" class = "order-confirm"><br>
		</div>


		<div id = 'div3' class = "button-div">		
			<h1 id = "state3" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">3</h1>
			<input type = "hidden" name = "hidden3" value = "on">
			<input type = "button" name = "button3" value = "" id = "button3" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button3" class = "reset-button"><br>
			<input type = "button" name = "order-date3" value = "Вибрати дату броні" id = "order-date3" class = "order-date"><br>
			<input type = "button" name = "order-time3" value = "Вибрати час броні" id = "order-time3" class = "order-time"><br>
			<input type = "button" name = "order-confirm3" value = "Підтвердити бронь" id = "order-confirm3" class = "order-confirm"><br>
		</div>


		<div id = 'div4' class = "button-div">
			<h1 id = "state4" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">4</h1>
			<input type = "hidden" name = "hidden4" value = "on">
			<input type = "button" name = "button4" value = "" id = "button4" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button4" class = "reset-button"><br>
			<input type = "button" name = "order-date4" value = "Вибрати дату броні" id = "order-date4" class = "order-date"><br>
			<input type = "button" name = "order-time4" value = "Вибрати час броні" id = "order-time4" class = "order-time"><br>
			<input type = "button" name = "order-confirm4" value = "Підтвердити бронь" id = "order-confirm4" class = "order-confirm"><br>
		</div>


		<div id = 'div5' class = "button-div">	
			<h1 id = "state5" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">5</h1>
			<input type = "hidden" name = "hidden5" value = "on">
			<input type = "button" name = "button5" value = "" id = "button5" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button5" class = "reset-button"><br>
			<input type = "button" name = "order-date5" value = "Вибрати дату броні" id = "order-date5" class = "order-date"><br>
			<input type = "button" name = "order-time5" value = "Вибрати час броні" id = "order-time5" class = "order-time"><br>
			<input type = "button" name = "order-confirm5" value = "Підтвердити бронь" id = "order-confirm5" class = "order-confirm"><br>
		</div>	


		<div id = 'div6' class = "button-div">	
			<h1 id = "state6" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">6</h1>
			<input type = "hidden" name = "hidden6" value = "on">
			<input type = "button" name = "button6" value = "" id = "button6" class = "button"><br>
			<input type = "button" name = "button3" value = "Скинути бронь" id = "reset-button6" class = "reset-button"><br>
			<input type = "button" name = "order-date6" value = "Вибрати дату броні" id = "order-date6" class = "order-date"><br>
			<input type = "button" name = "order-time6" value = "Вибрати час броні" id = "order-time6" class = "order-time"><br>
			<input type = "button" name = "order-confirm6" value = "Підтвердити бронь" id = "order-confirm6" class = "order-confirm"><br>
		</div>


		<div id = "div-price">
			<h2 id = "span-price">Ціна замовлення столика на годину 100 грн</h2>
		</div>

		<div id = "div-timeNow">
			<h2 id = "span-timeNow"></h2>
		</div>

	</div>

</body>
	<script type = "text/javascript" src = "js1.js"></script>
	<script type = "text/javascript" src = "jquery.js"></script>
	<script type = "text/javascript" src = "datepicker.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>	
</html>