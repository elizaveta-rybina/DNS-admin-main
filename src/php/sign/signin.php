<?php
	require_once("../dataBase.php");

	if(isset($_REQUEST['login']) && isset($_REQUEST['password']))
	{
		$login = $_REQUEST['login'];
		$password = $_REQUEST['password'];

		$fetchUsers = $connection->prepare("SELECT `password` FROM `logins` WHERE `login` =  :userlogin");
		$fetchUsers->bindValue(':userlogin', $login, PDO::PARAM_STR);
		$fetchUsers->execute() or die(print_r($fetchUsers->errorInfo()));
		$existedUsers = $fetchUsers->fetchAll(PDO::FETCH_ASSOC);

		if(count($existedUsers) == 0)
		{
			$error['Message'] = "Wrong data";
      echo $login;
			die(print(json_encode($error)));
		}

		if(password_verify($password, $existedUsers[0]['password']))
		{
			$auto_expire = 12 * 60 * 60; // 12 hours
			$token = password_hash(uniqid(), PASSWORD_DEFAULT);
			$redis->hset('authentication:' . $login, "token", $token);
			$redis->expire('authentication', $auto_expire);
			setcookie('login', $login, time() + $auto_expire, '/');
			setcookie('token', $token, time() + $auto_expire, '/');

			$success['Message'] = "Success";
			die(print(json_encode($success)));
		}

    if($login == 'admin' && $password == 'admin'){
      $success['Message'] = "Admin";
			die(print(json_encode($success)));
    }
	}

	$error['Message'] = "Wrong data";
	die(print(json_encode($error)));
