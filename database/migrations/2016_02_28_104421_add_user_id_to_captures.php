<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserIdToCaptures extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('captures', function(Blueprint $table){

			$table->integer('user_id')->nullable()->unsigned()->index();
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('captures', function(Blueprint $table){
			$table->dropForeign('captures_user_id_foreign');
		});
	}

}
