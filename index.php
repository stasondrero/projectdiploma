<?php

	if(isset($_POST['mainInfo'])){
		$a = fopen('COM3', 'w+');
		fwrite($a, $_POST['mainInfo']);
		echo $_POST['mainInfo']);
	}
	function OpenCon(){
 		$dbhost = "localhost";
 		$dbuser = "admin";
 		$dbpass = "123";
 		$db = "database";
 		$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 		return $conn;
 }
 
function CloseCon($conn){
	$conn -> close();
} 

?>