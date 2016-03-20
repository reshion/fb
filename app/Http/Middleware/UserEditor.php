<?php namespace App\Http\Middleware;

use Closure;
use App\User;
use \Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Guard;

class UserEditor {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next, $permission = '')
	{

		$User = Auth::user ();

		if($User->can($permission)) {
			return $next($request);
		}
		return response('Unauthorized.', 401);
	}

}
