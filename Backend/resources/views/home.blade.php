<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<script src="{{ asset("storage/jquery.js") }}" type="text/javascript"></script>

<script src="{{ asset("storage/jquery-ui.min.js") }}" type="text/javascript"></script>

<link rel="stylesheet" href="{{ asset('storage/jquery-ui.min.css') }}">

<script>

    var myarray=[];

    <?php $count=0;
    
    foreach($result as $row) {  ?>
    
        myarray[{{$count}}]="{{ $row->name }}";

<?php $count=$count+1; } ?>
  

    $(document).ready(function() {

        $("#num1").autocomplete({source:myarray});

    });


</script>
</head>

<body><br><br>



    <form action="{{route('search_product')}}" method="post">

        @csrf

        <input type="text" name="search" id="num1" class="form-control" placeholder="Search....." /> <br>

        <input type="submit" value="search" class="btn btn-primary" />


    </form>
    <br><br>

    <a href="{{route('gonres')}}">gonres</a><br><br>


    <a href="{{ route('insert_product') }}">Insert New Product</a> <bR><br>
    <br> <br>
    <table border style="">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>alias</th>
            <th>gonres</th>
            <th>year</th>
            <th>desc</th>
            <th>image</th>
            <th>language</th>
            <th>episode</th>
            <th>rating</th>
            <th>edit</th>
            <th>delete</th>
        </tr>


        <?php foreach ($result as $row) { ?>
            <tr>
                <td>{{$row->id}}</td>
                <td> <a href="{{ route('product_details',['id'=>$row->id]) }}"> {{ $row->name }} </a> </td>
                <td>{{$row->alias}}</td>
                <td>{{$row->gonres_name}}</td>
                <td>{{$row->year}}</td>
                <td>{{$row->desc}}</td>

                <td> <img width="200px" src="{{ asset('storage/anime_images/'.$row->img)}}" alt="<?php echo asset('storage/anime_images/' . $row->img) ?>" /></td>



                <td>{{$row->language}}</td>
                <td>{{$row->episode}}</td>
                <td>{{$row->rating}}</td>
                <td><a href="{{ route('edit',['id'=>$row->id])}}">edit</a></td>
                <td><a href="{{ route('product_delete',['id'=>$row->id]) }}">delete</a></td>



            </tr>
        <?php } ?>
    </table>
</body>

</html>