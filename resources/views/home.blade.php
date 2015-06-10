@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
	    <h1>Home</h1>
	    <button data-toggle-for-id="geolocation" class="btn">Position</button>
            <geo-location id="geolocation" data-interncoords="coords"></geo-location>
	</div>
</div>
@endsection
