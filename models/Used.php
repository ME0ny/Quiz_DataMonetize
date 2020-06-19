<?
namespace app\models;

use Yii;

class Used extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'used';
    }

    public function rules()
    {
        return 
        [
            [['id','userid','questionid'],'fields']
        ];
    }
}