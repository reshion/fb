@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
   	
		<geo-location id="geolocation" data-loading="loading" data-interncoords="coords"></geo-location>
	
	
		<city-weather data-interncoords="coords" data-loading="loading"></city-weather>
	
	
    </div>
</div>
@endsection
