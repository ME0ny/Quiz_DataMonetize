<?php

  $config=[
      'id' =>'school',
      'basePath' => realpath(__DIR__.'/../'),
      'bootstrap' =>
      [
          'debug',
          'gii'
      ],
      'sourceLanguage' => 'en',
      'language' => 'en',
      'timeZone' => 'Asia/Vladivostok',
      'components' =>
      [
        'urlManager'=>
            [
                'class' => 'codemix\localeurls\UrlManager',
                'enablePrettyUrl' => true, //делаем красивые урл адреса
                'showScriptName' => false,  //убираем из адреса index.php
                'languages' => ['ru', 'zh'],
                //'enableDefaultLanguageUrlCode' => true,
		        'rules' => 
	            [
//		            '' => 'site/index',
//                    '<controller:\w+>/<action:\w+>/' => '<controller>/<action>',
//                    ['class' => 'yii\rest\UrlRule', 'controller' => 'Rest_article'], //хз что это делает но работает
	            ]
            ],
        'request' => 
           [
              'cookieValidationKey' => 'vsemprivetktoetochitaet',
              'parsers' =>
                [
                  'application/json' => 'yii\web\JsonParser', //возможность сделать запрос в JSON 
                ],
		        'baseUrl' => ''
          ],
        'db' =>require (__DIR__. '/db.php'),
        'user' => 
            [
              'identityClass' => 'app\models\UserIdentity', //Подключаем реализацию аутентификации
              'enableAutoLogin' => true, //Показываем что используем систему аутологина
                'loginUrl'=>['/user/login']
            ],
        'i18n' =>
        [
            'translations' =>
            [
                'common*' =>
                [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/messages',
                ],
                'cows*' => //определение новой категории переводов
                [
                  'class' => 'yii\i18n\PhpMessageSource',
                  'basePath' => '@app/messages',
                ],
                'plan*' =>
                    [
                        'class' => 'yii\i18n\PhpMessageSource',
                        'basePath' => '@app/messages',
                    ],
            ]
        ],
           'authManager' => [
            'class' => 'yii\rbac\DbManager',
               'cache' => 'cache'
                             ],
          'cache' => [
              'class' => 'yii\caching\FileCache',  // Подключаем файловое кэширование данных
          ],
          'errorHandler'=>[
            'errorAction'=>'site/error',
          ],
          'mailer' => [
              'class' => 'yii\swiftmailer\Mailer',
             //   'useFileTransport' => true, //команда чтобы эмейлы отправлялись в локальный файл (понарошку)
              'transport' => [
                  'class' => 'Swift_SmtpTransport',
                  'host' => 'mail.hosting.reg.ru',
                  'port' => '465',
                  'encryption' => 'ssl',
                  'username' => 'dev@it-demo.ru',
                  'password' => '_oHaI33u'
                    ],
              ],
      ],
     'modules' => [
         'debug' =>'yii\debug\Module',//подключаю дебаг
         'gii'=>'yii\gii\Module',
     ]
 ];

//if (YII_ENV_DEV) {
//    $config['bootstrap'][] = 'gii';
//    $config['modules']['gii'] = [
//        'class' => 'yii\gii\Module',
//    ];
//}

//       $config['bootstrap'][]='gii';
//       $config['modules']['gii']=
//           ['class'=>'yii\gii\Module',];

return $config;
 ?>
