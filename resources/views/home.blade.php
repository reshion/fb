@extends('app')

@section('content')
<div class="container-fluid" >
    <div class="row">
   	
		<geo-location class="col-lg-12 col-xs-12 no-padding" id="geolocation1"  data-loading="loading" data-interncoords="coords"></geo-location>


		<city-weather class="col-lg-6 col-xs-12 no-padding" data-interncoords="coords" data-loading="loading"></city-weather>

       <water-info class="col-lg-6 col-xs-12 no-padding" data-interncoords="coords" data-loading="loading" data-internradius="radius"></water-info>
	
	
    </div>
</div>
@endsection
