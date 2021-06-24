<!DOCTYPE html>
<html>
	<meta charset="ISO-8859-1">
	<head>
		<title>Admin Panel</title>
		<link rel = "stylesheet" type = "text/css" href = "style.css">
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">	
	</head>
<body id = 'bg'>

	<div id = 'main-div' align = "center">
		<div id = 'div1' class = "button-div">
			<h1 id = "state1" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">1</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden1" value = "on">
				<input type = "submit" name = "button1" value = "Стіл №1" id = "button1" class = "button"><br>
				<label id = "label-time">Час:</label>
				<input name = "input-time1" type = "number" min = "60" max = "720" step = "60" value = "60" size = "2"  id = "input1" class = "input-time">
			</form>
			<h2 id = "time1">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden1" value = "off">
				<input type = "submit" name = "button1" value = "Скинути таймер" id = "reset-button1" class = "reset-button"><br>
			</form>

		</div>


		<div id = 'div2' class = "button-div">		
			<h1 id = "state2" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">2</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden2" value = "on">
				<input type = "submit" name = "button2" value = "Стіл №2" id = "button2" class = "button"><br>
			</form>
			<label id = "label-time">Час:</label>
			<input type = "number" name = "input-time2" min = "60" max = "720" step = "60" value = "60" size="2"  id = "input2" class = "input-time">
			<h2 id = "time2">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden2" value = "off">
				<input type = "submit" name = "button2" value = "Скинути таймер" id = "reset-button2" class = "reset-button"><br>
			</form>
		</div>


		<div id = 'div3' class = "button-div">		
			<h1 id = "state3" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">3</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden3" value = "on">
				<input type = "submit" name = "button3" value = "Стіл №3" id = "button3" class = "button"><br>
			</form>
			<label id = "label-time">Час:</label>
			<input type = "number" name = "input-time3" min = "60" max = "720" step = "60" value = "60" size = "2"  id = "input3" class = "input-time">
			<h2 id = "time3">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden3" value = "off">
				<input type = "submit" name = "button3" value = "Скинути таймер" id = "reset-button3" class = "reset-button"><br>
			</form>
		</div>


		<div id = 'div4' class = "button-div">
			<h1 id = "state4" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">4</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden4" value = "on">
				<input type = "submit" name = "button4" value = "Стіл №4" id = "button4" class = "button"><br>
			</form>
			<label id = "label-time">Час:</label>
			<input type = "number" name = "input-time4" min = "60" max = "720" step = "60" value = "60" size = "2"  id = "input4" class = "input-time">
			<h2 id = "time4">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden4" value = "off">
				<input type = "submit" name = "button4" value = "Скинути таймер" id = "reset-button4" class = "reset-button"><br>
			</form>
		</div>


		<div id = 'div5' class = "button-div">	
			<h1 id = "state5" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">5</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden5" value = "on">
				<input type = "submit" name = "button5" value = "Стіл №5" id = "button5" class = "button"><br>
			</form>
			<label id = "label-time">Час:</label>
			<input type = "number" name = "input-time5" min = "60" max = "720" step = "60" value = "60" size="2"  id = "input5" class = "input-time">
			<h2 id = "time5">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden5" value = "off">
				<input type = "submit" name = "button5" value = "Скинути таймер" id = "reset-button5" class = "reset-button"><br>
			</form>
		</div>	


		<div id = 'div6' class = "button-div">	
			<h1 id = "state6" class = "table-state">Вільно</h1>
			<h1 id = "button-h1">6</h1>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden6" value = "on">
				<input type = "submit" name = "button6" value = "Стіл №6" id = "button6" class = "button"><br>
			</form>
			<label id = "label-time">Час:</label>
			<input type = "number" name = "input-time6" min = "60" max = "720" step = "60" value = "60" size="2"  id = "input6" class = "input-time">
			<h2 id = "time6">0:00</h2>
			<form action = "index123.php" method = "POST" target = "_blank">
				<input type = "hidden" name = "hidden6" value = "off">
				<input type = "submit" name = "button6" value = "Скинути таймер" id = "reset-button6" class = "reset-button"><br>
			</form>
		</div>

		
		<a  href = "orderpage.php" target = "_blank"><h2 id = "order-button">Перейти на меню бронювання</h2></a>
		<div id = "div-price">

			<h2 id = "span-price">Ціна замовлення столика на годину 100 грн</h2>
		</div>

		<div id = "div-timeNow">
			<h2 id = "span-timeNow"></h2>
		</div>

	</div>

</body>
	<script type = "text/javascript" src = "js123.js"></script>
	<script type = "text/javascript" src = "jquery.js"></script>
	<script type = "text/javascript" src = "datepicker.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>	
</html>