<?php

namespace app\models;

class ZoneFile {
	private static $conf = "/etc/named/named.conf.local";
	public $name;
	public $records;

	public static function getZones(){
		$items = [];
		$file = file_get_contents(self::$conf);
		$zones = explode("zone ", $file);
		foreach($zones as $zone) {
			$item = new ZoneFile();
			$parts = explode(" {", $zone);
			if ($parts[0] !== "") {
				$item->name = $parts[0];
				$records = explode(";", str_replace("\n", "", $parts[1]));
				$item->records = [];
				foreach($records as $record){
					$values = explode(" ", $record);
					if (count($values) == 2) {
						$rec = [];
						$rec["key"] = str_replace (" ", "", $values[0]);
						$rec["key"] = str_replace ("\t", "", $values[0]);
						$rec["value"] = $values[1];
						array_push($item->records, $rec);
					}
				}
				array_push($items, $item);
			}
		}
		return $items;
	}

	public static function loadFromFile($name){
		$items = [];
		$found = false;
		$file = file_get_contents("../data/bind/" . $name . '.hosts');
		foreach (explode("\n", $file) as $line) {
			if (!$found) {
				$l = str_replace(" ", "", $line);
				$l = str_replace("\t", "", $l);
				if (str_contains($l, ')')) {
					$found = true;
				}
				continue;
			}
			if (strlen($line) == 0) continue;
			if (($line[0] == ';') || ($line[0] == '#') || ($line[0] == '$')) continue;
			$item = ZoneItem::loadFromString($line);
			array_push($items, $item);
		}
		return $items;
	}

	public static function getZoneByName($name){
		$zones = ZoneFile::getZones();
		foreach($zones as $zone){
			if ($zone->name == $name) return $zone;
		}
		return null;
	}
}
