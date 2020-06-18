<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%cow}}`.
 */
class m210001_000000_create_answer_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%answer}}', [
            'id' => $this->primaryKey(),
            'question' => $this->integer(),
            'title' => $this->string(),
            'flag' => $this->boolean(),
            'data_prediction' => $this->double(),
        ]);

        $this->addForeignKey(
            'question',
            'answer',
            'question',
            'question',
            'id',
            'CASCADE'
        );
    }


    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%question}}');
    }
}
