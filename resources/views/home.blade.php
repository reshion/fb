@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
   	<div class="panel panel-default col-lg-6 col-xs-12">
	    <div class="panel-heading" data-target="#panel-1" data-toggle="collapse" aria-expanded="false">Position</div>
	    <div id="panel-1" class="panel-body collapse in">
		<geo-location id="geolocation" data-loading="loading" data-interncoords="coords"></geo-location>
	    </div>
	</div>
	<div class="panel panel-default col-lg-6 col-xs-12">
	    <div class="panel-heading" data-target="#panel-2" data-toggle="collapse" aria-expanded="false">Weather</div>
	    <div id="panel-2" class="panel-body collapse in">
		<city-weather data-interncoords="coords" data-loading="loading"></city-weather>
	    </div>
	</div>
	
    </div>
</div>
@endsection
