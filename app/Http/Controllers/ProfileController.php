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
          * Show the form for creating a new resource.
          *
          * @return Response
          */
         public function create ()
              {
              //
              }

         /**
          * Store a newly created resource in storage.
          *
          * @return Response
          */
         public function store ()
              {
              //
              }

         /**
          * Display the specified resource.
          *
          * @param  int  $id
          * @return Response
          */
         public function show ($id)
              {
              //
              }

         /**
          * Show the form for editing the specified resource.
          *
          * @param  int  $id
          * @return Response
          */
         public function edit ($id)
              {
              
              }

         /**
          * Update the specified resource in storage.
          *
          * @param  int  $id
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

         /**
          * Remove the specified resource from storage.
          *
          * @param  int  $id
          * @return Response
          */
         public function destroy ($id)
              {
              //
              }

         }
    