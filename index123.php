<?php
	
	include "connect.php";
	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	$orderdate = date("l jS \of F Y h:i:s A");
	$inputTime1 = $_POST["input-time1"];
	$inputTime2 = $_POST["input-time2"];
	$inputTime3 = $_POST["input-time3"];
	$inputTime4 = $_POST["input-time4"];
	$inputTime5 = $_POST["input-time5"];
	$inputTime6 = $_POST["input-time6"];

	if($_POST['hidden1'] == "on" || $_COOKIE["led1state"] == "11"){
		$insert = mysqli_query($db,"INSERT INTO `tableorders`(`orderdate`, `ordertime`, `tablenumber`) 
									VALUES ('$orderdate','$inputTime1'), '"."Стіл №2"."'");
		$a = fopen('COM3', 'w+');
		sleep(1);
    	setcookie("led1state", $_COOKIE['led1state'] = "11", time() + $_POST["input-time1"] * 60);
		fwrite($a, 11);
		echo "11";
	}if($_POST['hidden2'] == "on" || $_COOKIE["led2state"] == "21"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led2state", $_COOKIE['led2state'] = "21", time() + $_POST["input-time2"] * 60);
		fwrite($a, 21);
		echo "21";
	}if($_POST['hidden3'] == "on" || $_COOKIE["led3state"] == "31"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led3state", $_COOKIE['led3state'] = "31", time() + $_POST["input-time3"] * 60);
		fwrite($a, 31);
		echo "31";
	}if($_POST['hidden4'] == "on" || $_COOKIE["led4state"] == "41"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led4state", $_COOKIE['led4state'] = "41", time() + $_POST["input-time4"] * 60);
		fwrite($a, 41);
		echo "41";
	}if($_POST['hidden5'] == "on" || $_COOKIE["led5state"] == "51"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led5state", $_COOKIE['led5state'] = "51", time() + $_POST["input-time5"] * 60);
		fwrite($a, 51);
		echo "51";
	}if($_POST['hidden6'] == "on" || $_COOKIE["led6state"] == "61"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led6state", $_COOKIE['led6state'] = "61", time() + $_POST["input-time6"] * 60);
		fwrite($a, 61);
		echo "61";
	}if($_POST['hidden1'] == "off" || $_COOKIE["led6state"] == "10"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led1state", 10, time() + $_POST["input-time1"] * 60);
		fwrite($a, 10);
		echo "10";
	}if($_POST['hidden2'] == "off" || $_COOKIE["led6state"] == "20"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led2state", 20, time() + $_POST["input-time2"] * 60);
		fwrite($a, 20);
		echo "20";
	}if($_POST['hidden3'] == "off" || $_COOKIE["led6state"] == "30"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led3state", 30, time() + $_POST["input-time3"] * 60);
		fwrite($a, 30);
		echo "30";
	}if($_POST['hidden4'] == "off" || $_COOKIE["led6state"] == "40"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led4state", 40, time() + $_POST["input-time4"] * 60);
		fwrite($a, 40);
		echo "40";
	}if($_POST['hidden5'] == "off" || $_COOKIE["led6state"] == "50"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led5state", 50, time() + $_POST["input-time5"] * 60);
		fwrite($a, 50);
		echo "50";
	}if($_POST['hidden6'] == "off" || $_COOKIE["led6state"] == "60"){
		$a = fopen('COM3', 'w+');
		sleep(1);
		setcookie("led6state", 60, time() + $_POST["input-time6"] * 60);
		fwrite($a, 60);
		echo "60";
	}
var_dump($_COOKIE);
fclose($a);

?>