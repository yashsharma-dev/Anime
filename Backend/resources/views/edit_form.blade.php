<html>

<head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

</head>

<body>

    <br>

    <div class="container">

        <div class="panel panel-primary">

            <div class="panel-heading">
                <h1>Edit Product</h1>
            </div>



            <div class="panel-body">

                <form action="{{route('do_edit',['id'=>$row->id])}}" method="post" enctype="multipart/form-data">

                    @csrf

                    <input type="text" name="name" value="{{$row->name}}"  class="form-control" /> <bR><br>

                    <input type="text" name="alias" value="{{$row->alias}}" class="form-control" /> <bR><br>

                    <input type="text" name="desc" value="{{$row->desc}}" class="form-control" /> <bR><br>

                    <input type="text" name="year" value="{{$row->year}}" class="form-control" /> <bR><br>

                    <input type="text" name="language" value="{{$row->language}}" class="form-control" /> <br><br>
                    
                    <input type="text" name="episode" value="{{$row->episode}}" class="form-control" /> <br><br>
                    
                    <input type="text" name="rating" value="{{$row->rating}}" class="form-control" /> 

                    <Br><bR>

                    <input type="file" name="image" class="form-control" /> <bR><br>




                    <input type="submit" value="Add New Product" class="btn btn-primary" />

                </form>

            </div>

            <div class="panel-footer">

            </div>

        </div>


    </div>

</body>

</html>