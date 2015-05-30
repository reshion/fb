<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Bican\Roles\Models\Role;
use \Illuminate\Support\Facades\Auth;
//use Illuminate\Http\Request;
use Request;

class UserController extends Controller
    {

    public function __construct()
        {
        $this->middleware('auth');
        }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
        {
        $user = Auth::user();
        if (!$user->is('admin'))
            {
            return redirect('home');
            return redirect('/');
            }
        return view('be/user/list', array("users" => User::all()));
        }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
        {
        //
        }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
        {
        //
        }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
        {
        //
        }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
        {
        $user = User::find($id);
        $test = $user->level();
        return view('be/user/edit', array("user" => User::find($id)));
        }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request)
        {
        $user = User::find($request::input('id'));
        $user->name = $request::input('name');
        $user->email = $request::input('email');
        $user->save();
        return view('be/user/edit', array("user" => $user));
        }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
        {
        //
        }

    }
