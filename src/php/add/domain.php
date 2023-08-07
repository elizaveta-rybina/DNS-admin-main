<?php
require_once "../dataBase.php";
$domain_name = $_REQUEST['domain_name'];

$stmt = $connection->prepare("INSERT INTO `domains` (`name`) VALUES (?)");
$data = array($domain_name);
$stmt->execute($data);