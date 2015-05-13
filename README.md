yii2-redactor
=============

Installation
------------
The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

```
php composer.phar require --prefer-dist "mirocow/yii2-redactor" "*"
```

or add

```json
"mirocow/yii2-redactor" : "*"
```

to the require section of your application's `composer.json` file.

Configurate
=====

```php

	'components' => [
        'redactor' => [
          'class' => 'yii\redactor\RedactorModule'
        ],
      ] 
        
```

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
