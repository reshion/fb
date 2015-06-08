@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
	<div class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0">
	    <h1>Home</h1>
            <span>Ctrl Latitude</span><span data-ng-bind="coords.lat"></span><br>
            <span>Ctrl Longitude</span><span data-ng-bind="coords.lng"></span>
            <geo-location interncoords="coords"></geo-location>
	</div>
    </div>
</div>
@endsection
