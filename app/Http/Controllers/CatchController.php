<?php namespace App\Http\Controllers;

use App\Capture;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Bican\Roles\Models\Role;
use \Illuminate\Support\Facades\Auth;
//use Illuminate\Http\Request;
use Request;
use Response;

class CatchController extends Controller {

	public function __construct ()
	{
		$this->middleware ('auth');
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$user = Auth::user ();
		if (!$user->is ('admin') && !$user->is ('user'))
		{
			return redirect ('home');
		}
		return view ('be/catch/catch');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$user = Auth::user ();
		if (!$user->is ('admin') && !$user->is ('user'))
		{
			return redirect ('home');
		}
		$data	 = Request::input();

		$Capture = new Capture;
		$Capture->species = $data['fish']['species']['value'];
		$Capture->length = $data['fish']['length']['value'];
		$Capture->extent = $data['fish']['extent']['value'];
		$Capture->weight = $data['fish']['weight']['value'];
		$Capture->coords = json_encode($data['coords']);
		$Capture->weather = json_encode($data['weather']);
		$Capture->save();

		return Response::json(['data' => array('message' => 'Erfolgreich gespeichert.' . json_encode($data) , 'redirecturl' => '/')]);
	}

	public function heatmap() {

		$CoordList = array();
		$Captures = Capture::all();
		foreach($Captures as $Capture) {
			if($Capture->coords != '') {
				$CoordList[] = json_decode($Capture->coords);
			}
		}
		return Response::json(['Coordlist' => $CoordList]);


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
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
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
