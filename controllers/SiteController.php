<?php

//Контроллер связвает модель с представлением
namespace app\controllers;

use yii;
use yii\web\Response;
use app\models\Answer;
use app\models\Question;
use app\models\User;
use app\models\Used;
use yii\rest\ActiveController;
use app\models\Articles;
use yii\data\ActiveDataProvider;

class SiteController extends ActiveController
{
    public $modelClass = 'app\models\Question';
    public function actions() //переопределяем функцию actions из класса-родителя
    {
     $actions = parent::actions(); //берем функцию из класса родителя непосредственно
     unset($actions['index']); //удаляем actionIndex 
     return $actions; //возвращаем список action
    } //прим. Когда контроллер не найдет actionIndex внутри функции actions, он пойдет искать ее дальше в сам контроллер. 

    public function actionIndex($id = null) //определяем нашу функцию actionIndex
    {
        if (!User::checkExist($id))
        {
            return -1; //вернуть минус единицу если айди не задан или не существует пользователя с таким айди
        }
        $user = User::find()->where(['id'=>$id])->one();
        // $usedquestions = Used::find()->where(['userid'=>$id])->all();
        // // $used = [];
        // foreach($usedquestions as $question)
        // {
        //     array_push($used, $question->questionid);
        // }
        $questions = Question::find()->limit(20-$user->value_answer)->all();
        if (count($questions) <= 0)
        {
            return -4; // если для человека не найдено вопросов вернуть -4
        }
        foreach($questions as $question)
        {
            $question->answers = Answer::find()->where("question=$question->id")->all();
        }
        $result['client'] = $user;
        $result['questions'] = $questions;
        return $result;
    }
    public function actionAns($id = null, $ans_id = null, $ans_value = null)
    {
        if (!User::checkExist($id))
        {
            return -1; //вернуть минус единицу если айди не задан или не существует пользователя с таким айди
        }
        if (!Answer::checkExist($ans_id))
        {
            return -2; //вернуть минус два если ответ не найден
        }
        $user = User::find()->where(['id'=>$id])->one();
        $user->value_answer++;
        $ansobj = Answer::find()->where(['id'=>$ans_id])->one();
        $ansobj->data_prediction++;
        $question = Question::find()->where(['id'=>$ansobj->question])->one();
        $question->answers_qnt++;
        // $used = new Used();
        // $used->userid = $id;
        // $used->questionid = $question->id;
        if ($ansobj->save() && $question->save() && $user->save())
        {
            return 1;
        }
        return -3;
    }
    public function actionAddpoints($id = null, $value = 0)
    {
        if (!User::checkExist($id))
        {
            return -1;
        }
        $user = User::find()->where(['id'=>$id])->one();
        $user->point+= $value;
        if ($user->save())
        {
            return 1;
        }
    }

    public function actionSubpoints($id = null, $value = 0)
    {
        if (!User::checkExist($id))
        {
            return -1;
        }
        $user = User::find()->where(['id'=>$id])->one();
        $user->point-= $value;
        if ($user->save())
        {
            return 1;
        }
    }

    public function actionGetquestion($id = null)
    {
        if (!User::checkExist($id))
        {
            return -1;
        }
        // $usedquestions = Used::find()->where(['userid'=>$id])->all();
        // // $used = [];
        // foreach($usedquestions as $question)
        // {
        //     array_push($used, $question->questionid);
        // }
        $question = Question::find()->one();
        // if ($question == null)
        // {
            // return -4; // если для человека не найдено вопросов вернуть -4
        // }
        return $question;
        
         
    }

    public function behaviors() //вывод JSON по умолчанию
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON; //переопределение вывода text/html на JSON
        return $behaviors;
    }

  
}