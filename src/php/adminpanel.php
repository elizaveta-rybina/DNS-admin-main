<?php
	require_once(__DIR__ . "/php/functions.php");

	if(!isset($_COOKIE['login']) || !isset($_COOKIE['token']))
	{
		header('Location: http://localhost/index.html');
	}

	$login = $_COOKIE['login'];

	if($_COOKIE['token'] != $redis->hget('authentication:' . $login, 'token'))
	{
		header('Location: http://localhost/index.html');
	}
?>
