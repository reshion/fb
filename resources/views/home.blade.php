@extends('app')

@section('content')
<div class="container-fluid">
    <div class="row">
	<div class="">
	    <h1>Home</h1>
	    <div>
		ctrl catitude: </span><span data-ng-bind="coords.lat"></span> - ctrl congitude: </span><span data-ng-bind="coords.lng"></span>
	    </div>
            <geo-location interncoords="coords"></geo-location>
	</div>
    </div>
</div>
@endsection
