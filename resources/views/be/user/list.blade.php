@extends('app')
@section('content')
<div class="container-fluid">
    <div class="row">
	<div class="">
	    <h1>User</h1>
	    <table class="table">
		<thead>
		    <tr>
			<th>Name</th>
			<th>E-Mail</th>
			<th></th>
		    </tr>
		</thead>
		<tbody>

		    @foreach($users as $user)
		    <tr>
			<td>{{$user->name}}</td>
			<td>{{$user->email}}</td>
			<td><a href="{{ url('user/edit/' . $user->id) }}"><i class="glyphicon glyphicon-edit"></i></a></td>
		    </tr>
		    @endforeach

		</tbody>
	    </table>
	</div>
    </div>
</div>
@endsection

