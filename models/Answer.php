<?
namespace app\models;

use Yii;

class Answer extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'answer';
    }

    public function rules()
    {
        return 
        [
            [['id','question','title','flag','data_prediction'],'fields']
        ];
    }
}