<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Capture extends Model {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'captures';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['species', 'length', 'extent', 'weight', 'coords', 'weather'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
//    protected $hidden = ['password', 'remember_token'];

}
