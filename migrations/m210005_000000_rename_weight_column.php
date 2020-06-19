<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%cow}}`.
 */
class m210005_000000_rename_weight_column extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->renameColumn('{{%question}}', 'weight', 'answers_qnt');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
    }
}
