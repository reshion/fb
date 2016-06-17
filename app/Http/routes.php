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
Route::get('/', 'WelcomeController@index');

Route::group(['prefix' => 'home'], function() {
    Route::get('/', 'HomeController@index');
    Route::get('/template/{path}', 'HomeController@loadTemplate');

} );
Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('/', 'UserController@userList');
        Route::get('edit/{id}', 'UserController@edit');
        Route::post('update', 'UserController@update');
    });

    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', 'ProfileController@index');
        Route::post('update', 'ProfileController@update');
    });
    Route::group(['prefix' => 'catch'], function () {
        Route::get('/', 'CatchController@index');
        Route::post('create', 'CatchController@create');
        Route::get('list', 'CatchController@catchList');
        Route::get('edit/{id}', 'CatchController@edit');
        Route::get('show/{id}', 'CatchController@show');
    });
    Route::group(['prefix' => 'heatmap'], function () {
        Route::get('load', 'CatchController@loadHeatmap');
        Route::get('heatmap', 'CatchController@showHeatmap');
    });
});

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
    