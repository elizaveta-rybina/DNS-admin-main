<?php
require_once "../dataBase.php";

$domainid = $_REQUEST['domainid'];
$priority = $_REQUEST['priority'];
$ip = $_REQUEST['ip'];

$stmt = $connection->prepare("INSERT INTO `MXRecord` (`domainid`, `priority`,`ip`) VALUES (?, ?, ?)");
$data = array($domainid, $priority, $ip);
$stmt->execute($data);