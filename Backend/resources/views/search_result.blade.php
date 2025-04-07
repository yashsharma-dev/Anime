<html>

<head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

</head>

<body>

    <br> <br>

    <div class="container">

       
        <h2>Total Products Found: {{$count}} </h2>
       
        <table border style="">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>alias</th>
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

    </div>

</body>

</html>