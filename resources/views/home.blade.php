@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
	<div class="">
	    <h1>Home</h1>
            <span>Ctrl Latitude: </span><span data-ng-bind="coords.lat"></span><br>
            <span>Ctrl Longitude: </span><span data-ng-bind="coords.lng"></span>
            <geo-location interncoords="coords"></geo-location>
	</div>
    </div>
</div>
@endsection
