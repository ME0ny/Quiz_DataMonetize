<?
namespace app\models;

use Yii;


class User extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'user';
    }

    public static function checkExist($id = null)
    {
        if (($id == null) or (!($user = self::find()->where(['id'=>$id])->one())))
        {
            return false; //вернуть false если айди не задан или не существует пользователя с таким айди
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
            [['id','point','rate','value_answer'],'fields']
        ];
    }
}