@extends('app')

@section('content')
    <div class="container-fluid">
        <div class="row">
                <h1>Fänge</h1>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Art</th>
                        <th>Länge</th>
                        <th>Umfang</th>
                        <th>Gewicht</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach (Auth::user()->captures as $item)
                        <tr>
                            <td>{{ $item->species }}</td>
                            <td>{{ $item->length }}</td>
                            <td>{{ $item->extent }}</td>
                            <td>{{ $item->weight }}</td>
                            <td>
                                <a href="{{ url('catch/edit/' . $item->id) }}"><i class="glyphicon glyphicon-edit pull-right"></i></a>

                                <a href=""
                                     ng-click="showModal({{$item->id}}, {{$item->coords}})">
                                    <span class="glyphicon glyphicon-globe"  ></span>

                                </a>
                            </td>

                        </tr>
                    @endforeach

                    </tbody>
                </table>
            <geo-location class="col-lg-12 col-xs-12 no-padding" id="geolocation0" data-autoload="noAutoload"  data-loading="loading" data-interncoords="coords2"></geo-location>

        </div>
    </div>
@endsection