<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%cow}}`.
 */
class m210003_000000_create_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user}}', [
            'id' => $this->primaryKey(),
            'point' => $this->integer(),
            'rate' => $this->integer(),
            'value_answer' => $this->integer(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%user}}');
    }
}
