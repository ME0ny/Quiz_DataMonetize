<?php

//Контроллер связвает модель с представлением
namespace app\controllers;

use yii;
use yii\web\Response;
use app\models\Answer;
use app\models\Question;
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

    public function actionIndex() //определяем нашу функцию actionIndex
    {
        $questions = Question::find()->all();
        foreach($questions as $question)
        {
            $question->answers = Answer::find()->where("question=$question->id")->all();
        }
        return ['questions' => $questions];
    }

    public function behaviors() //вывод JSON по умолчанию
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON; //переопределение вывода text/html на JSON
        return $behaviors;
    }
}