<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCapturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('captures', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('species');
			$table->string('length');
			$table->string('extent');
			$table->string('weight');
			$table->string('coords');
			$table->string('weather');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('captures');
	}

}
