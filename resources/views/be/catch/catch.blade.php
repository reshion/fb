@extends('app')

@section('content')
    <div class="container-fluid">
        <div class="row">

            <catch class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12 col-xs-offset-0 no-padding catch" data-interncoords="coords" data-loading="loading"></catch>
            <heat-map class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12 col-xs-offset-0 no-padding" id="heatmap1" data-heatmap-height="'400px'"></heat-map>

        </div>
    </div>
@endsection
