<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%cow}}`.
 */
class m210004_000000_create_used_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%used}}', [
            'id' => $this->primaryKey(),
            'userid' => $this->integer(),
            'questionid' => $this->integer(),
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
