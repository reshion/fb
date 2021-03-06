<!DOCTYPE html>
<html lang="en" data-ng-app="App">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fishbook</title>

    <link href="{{ asset('/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/bootstrap/bootstrap-additions.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/bower_components/css/all.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">


    <!-- Fonts -->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script>
        window.publicPath = '{{ url() }}';
    </script>
</head>
<body data-ng-controller="MainController">
<!-- Overlay to prevent clicks -->
<div class="overlay" data-ng-if="loading.length > 0">

</div>

<div id="wrapper" data-ng-controller="LoacationController">
    <header>

    </header>

    <nav class="navbar navbar-default ">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Fishbook (beta)</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="{{ url('/') }}">Home</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    @if (Auth::guest())
                        <li><a href="{{ url('/auth/login') }}">Login</a></li>
                        <li><a href="{{ url('/auth/register') }}">Register</a></li>
                    @else
                        <li><a href="{{ url('/heatmap/heatmap') }}">Heatmap</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-expanded="false">Fangbuch<span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    Fangbuch
                                    <li><a href="{{ url('/catch') }}">Neuer Fang</a></li>
                                    <li><a href="{{ url('/catch/list') }}">Alle Fänge</a></li>
                                </ul>
                            </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                @role('admin')
                                <li><a href="{{ url('/user') }}">Users</a></li>
                                @endrole
                                <li><a href="{{ url('/auth/logout') }}">Logout</a></li>
                                <li><a href="{{ url('/profile') }}">Profile</a></li>
                            </ul>

                        </li>
                        <li>




                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
    <div data-ng-if="loading.length > 0 || true" class="loading">
        <div class="inner-loading">
            &nbsp;
        </div>
    </div>

    <div class="container content">
        @yield('content')


    </div>
    <footer>

    </footer>
</div>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>
{{--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>--}}
<script async defer src="//maps.googleapis.com/maps/api/js?key=AIzaSyCHIpr5MxgE7hCU-OP98fXX1cGM9k_rF_4&signed_in=true&libraries=visualization"></script>



<script type="text/javascript">

</script>
<script src="{{ asset('/bower_components/js/all.js') }}"></script>

<script src="{{ asset('js/App.js') }}"></script>
<script src="{{ asset('js/Controller/MainController.js') }}"></script>
<script src="{{ asset('js/Controller/LocationController.js') }}"></script>
<!-- Directiven -->
<script src="{{ asset('js/Directives/GeoLocationDirective.js') }}"></script>
<script src="{{ asset('js/Directives/WeatherDirective.js') }}"></script>
<script src="{{ asset('js/Directives/WaterDirective.js') }}"></script>
<script src="{{ asset('js/Directives/CatchDirective.js') }}"></script>
<script src="{{ asset('js/Directives/HeatmapDirective.js') }}"></script>
<!-- Services -->
<script src="{{ asset('js/Services/WeatherService.js') }}"></script>
<script src="{{ asset('js/Services/LocationService.js') }}"></script>
<script src="{{ asset('js/Services/WaterService.js') }}"></script>
<script src="{{ asset('js/Services/CatchService.js') }}"></script>
<script src="{{ asset('js/Services/HeatmapService.js') }}"></script>

<script src="{{ asset('js/animate.js') }}"></script>

<style>
    * {
        border-radius: 0px !important;
    }
</style>
</body>
</html>