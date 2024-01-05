<?php

namespace app\models;

use Yii;
use yii\base\Model;

class ZoneItemForm extends Model
{
    public $zone;    
    public $types;

    public $name;
    public $type;

    public function rules()
    {
        return [
            // username and password are both required
            [['name', 'string'], 'required'],
            // rememberMe must be a boolean value
            ['type', 'string']
        ];
    }

    public function zoneItem(){
        if ($this->validate()) {
            return true;
        }
        return false;
    }


}
