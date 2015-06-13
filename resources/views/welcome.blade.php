<html>
    <head>
	<title>Fishbook</title>

	<link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
	<link href="{{ asset('/css/welcome.css') }}" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>


	<style>
	
	</style>
    </head>
    <body>
	<div class="content 
	     col-lg-6 col-lg-offset-3 
	     col-md-6 col-md-offset-3 
	     col-sm-8 col-sm-offset-2 
	     col-xs-10 col-xs-offset-1" >
	    <div class="title">Fishbook<span>(beta)</span></div>
	    @if (Auth::guest())
	    <a class="btn btn-default btn-success btn-block btn-success-trans" href="{{ url('/auth/login') }}">Login</a>
	    <a class="btn btn-default btn-info btn-block btn-info-trans "href="{{ url('/auth/register') }}">Register</a>
	    @endif
	</div>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <style>
	* {
	    border-radius: 0px !important;
	}
    </style>
</body>
</html>
