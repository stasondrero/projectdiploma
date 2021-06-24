<?php

	$db = mysqli_connect("localhost", "root", "") or die("Could not connect to server!");
	mysqli_select_db($db, "test") or die("Could not connect to database!");

?>