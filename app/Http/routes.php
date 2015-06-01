<?php

    /*
      |--------------------------------------------------------------------------
      | Application Routes
      |--------------------------------------------------------------------------
      |
      | Here is where you can register all of the routes for an application.
      | It's a breeze. Simply tell Laravel the URIs it should respond to
      | and give it the controller to call when that URI is requested.
      |
     */
    Route::get ('/', 'WelcomeController@index');

    Route::get ('home', 'HomeController@index');
    Route::group (['middleware' => 'auth'], function()
        {
        Route::group (['prefix' => 'user'], function()
            {
            Route::get ('/', 'UserController@index');
            Route::get ('edit/{id}', 'UserController@edit');
            Route::post ('update', 'UserController@update');
            });

        Route::group (['prefix' => 'profile'], function()
            {
            Route::get ('/', 'ProfileController@index');
            Route::post ('update', 'ProfileController@update');
            });
        });
    Route::controllers ([
            'auth' => 'Auth\AuthController',
            'password' => 'Auth\PasswordController',
    ]);
    