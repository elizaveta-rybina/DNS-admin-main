<?php
require_once "../dataBase.php";
$domain_name = $_REQUEST['domain_name'];

$stmt = $connection->prepare("DELETE FROM `domains` WHERE domain_name = $domain_name");
$data = array($domain_name);
$stmt->execute($data);