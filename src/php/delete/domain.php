<?php
require_once "../dataBase.php";
$domainid = $_REQUEST['domainid'];


$stmt = $connection->prepare("DELETE FROM `domains` WHERE `domains`.`id` = $domainid");
$stmt->execute();

