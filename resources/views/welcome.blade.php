<html>
    <head>
	<title>Fishbook</title>

	<link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">


	<style>
	    body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		color: #B0BEC5;
		display: table;
		font-weight: 100;
		font-family: 'Lato';
		background-image: url('images/landing.png');
		background-repeat: no-repeat; 
		background-position: center center;
	    }

	    .container {
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	    }

	    .content {
		text-align: center;
		display: inline-block;
		margin-bottom: 100px;
	    }

	    .title {
		font-size: 96px;
		margin-bottom: 40px;
	    }
	    body .container .content .btn-success-trans {
		background-color:  rgba(112, 184, 112, 0.1);
	    }
	    body .container .content .btn-info-trans {
		background-color: rgba(94, 191, 255, 0.1);
	    }
	</style>
    </head>
    <body>
	<div class="container " >
	    <div class="content" >
		<div class="title">Fishbook</div>
		@if (Auth::guest())
		<a class="btn btn-default btn-success btn-block btn-success-trans" href="{{ url('/auth/login') }}">Login</a>
		<a class="btn btn-default btn-info btn-block btn-info-trans "href="{{ url('/auth/register') }}">Register</a>
		@endif
	    </div>
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
