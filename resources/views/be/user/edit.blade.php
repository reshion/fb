@extends('app')
@section('content')
<div class="container">
    <h1>{{$user->name}}</h1>
    <form action="{{ url('user/update')}}" method="POST">
        <div class="form-group">
            <label for="usr">Name:</label>
            <input id="usr" type="text" name="name" class="form-control" value="{{$user->name}}" >
        </div>
        <div class="form-group">
            <label for="usr">Email:</label>
           <input id="email" type="email" name="email" class="form-control"  value="{{$user->email}}">
        </div>
        <input type="hidden" name="id" value="{{$user->id}}">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <button class="btn btn-success">save</button>
    </form>
</div>
@endsection

