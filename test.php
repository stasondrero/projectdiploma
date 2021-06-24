<?php
	if(isset($_POST['mainInfo'])){
		$a = fopen('COM4', 'w+');
		fwrite($a, $_POST['mainInfo']);
		echo $_POST['mainInfo'];
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>test</title>
</head>
<body>
	<p>Введіть 2 символи:</p>

	<form method = "POST">
		<input type = "text" id = "text" name = "mainInfo">
		<input type = "submit" value = "перейти">
	</form>

</body>
</html>