<?php

//Контроллер связвает модель с представлением
namespace app\controllers;
use yii\web\Controller;
use yii;
use yii\filters\AccessControl;
use yii\web\ErrorAction;

class SiteController extends Controller
{
    public function actionIndex()
    {
        return $this->render('index');

    }
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
                'view' => '@app/views/site/myerror.php'
            ],
        ];
    }
    public function actionError()
    {

//        if (($exception->statusCode) == 404){
//            $message="Такой страницы не существует.";
//        }
//        else{
//            $message="У вас не хватает прав доступа.";
//        }
        return $this->render('myerror',['message'=>$message]);
    }

//
//
//    public function actionError()
//    {
//        $exception = \Yii::$app->errorHandler->exception;
//        $exception_my='Не хватает прав';
//        if ($exception !== null){
//            return $this->render('error',['exception'=>$exception]);
//        }
//    }

//    public function behaviors() //Разрешение на вход на страницы
//    {
//        return [
//            'access' => [
//                'class' => AccessControl::className(),
//                'rules' => [
//                    [
//                        'actions' => ['index'],
//                        'allow' => true,
//                        'roles' => ['@'],
//
//                    ],
//                ],
//            ],
//            ];
//    }
}