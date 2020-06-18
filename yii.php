<?php

   #define('YII_DEBUG', true);
   require __DIR__.'/vendor/autoload.php';
   require __DIR__.'/vendor/yiisoft/yii2/Yii.php'; // Подключаем библиотеку Yii
   $config = require __DIR__.'/config/console.php';
   (new yii\console\Application($config))->run();

?>

