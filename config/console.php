<?php
    return[
        'id' => 'school-console',
        'basePath' => dirname(__DIR__),
        'components' => [
            'db' => require (__DIR__ . '/db.php'), //Указываем файл через который подключились к бд
            'authManager' => [
                'class' => 'yii\rbac\DbManager',
                ]
        ]
    ];
