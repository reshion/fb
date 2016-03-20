<?php

    namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\Auth;
//use Illuminate\Http\Request;
use Request;

    class ProfileController extends Controller
         {

         public function __construct ()
              {
              $this->middleware ('auth');
              }

         /**
          * Display a listing of the resource.
          *
          * @return Response
          */
         public function index ()
              {
              $user = Auth::user ();
              return view ('be/profile/edit', array ( 'user' => $user ));
              }


         /**
          * Update the specified resource in storage.
          *
          * @return Response
          */
         public function update (Request $request)
              {
              $user = Auth::user ();
              $user->name = $request::input ('name');
              $user->email = $request::input ('email');
              $user->save ();
              return view ('be/profile/edit', array ( "user" => $user ));//
              }

         }
    