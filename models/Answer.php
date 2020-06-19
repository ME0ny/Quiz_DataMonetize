<?
namespace app\models;

use Yii;

class Answer extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'answer';
    }

    public static function checkExist($id = null)
    {
        if (($id == null) or (!($answer = self::find()->where(['id'=>$id])->one())))
        {
            return false; //вернуть false если айди не задан или не существует объекта с таким айди
        }
        else
        {
            return true;
        }
    }

    public function rules()
    {
        return 
        [
            [['id','question','title','flag','data_prediction'],'fields']
        ];
    }
}