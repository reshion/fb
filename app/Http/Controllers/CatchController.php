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
		return view ('be/catch/catch');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function catchList()
	{
		$User = Auth::user();
		return view ('be/catch/list', array('catchList' => $User->captures));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$User = Auth::user ();

		$data	 = Request::input();

		$Capture = new Capture([
			'species' => $data['fish']['species']['value'],
			'length' => $data['fish']['length']['value'],
			'extent' => $data['fish']['extent']['value'],
			'weight' => $data['fish']['weight']['value'],
			'coords' => json_encode($data['coords']),
			'weather' => json_encode($data['weather']),
		]);

		$User->captures()->save($Capture);

		return Response::json(['data' => array('message' => 'Erfolgreich gespeichert.', 'log' => json_encode($data) , 'redirecturl' => '/')]);
	}

	public function loadHeatmap() {

		$CoordList = array();
		$User = Auth::user();
		foreach($User->captures as $Capture) {
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
	public function showHeatmap()
	{
		return view ('be/heatmap/heatmap');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Response::json(['Capture' => Capture::where('id', $id)->get()]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$capture = Capture::where('id', $id)->get();
		$User = Auth::user();
		return view ('be/catch/list', array('catchList' => $User->captures));
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
