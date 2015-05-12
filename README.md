yii2-redactor
=============

Using
=====

```php
use yii\redactor\widgets\Redactor;

        <?= Redactor::widget(
          [
            'model' => $model,
            'attribute' => 'description',
            'options' => [
              'style' => 'width: 100%; height: 340px;',
            ],
            'clientOptions' => [
				        'imageManagerJson' => \yii\helpers\Html::url('/redactor/upload/imagejson'),
				        'imageUpload' => \yii\helpers\Html::url('/redactor/upload/image'),
				        'fileUpload' => \yii\helpers\Html::url('/redactor/upload/file'),
				        'lang' => 'en',
				        'plugins' => ['fontcolor', 'filemanager', 'imagemanager', 'table', 'undoredo'],
                'placeholder' => 'Please add description',
            ],
          ]
        ); ?>	
```
