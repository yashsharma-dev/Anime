

<html>

<head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

</head>

<body>

    <br>

    <div class="container">

        <div class="panel panel-primary">

            <div class="panel-heading">
                <h1>Insert New Product</h1>
            </div>



            <div class="panel-body">

                <form action="{{route('do_insert')}}" method="post" enctype="multipart/form-data">

                    @csrf

                    <input type="text" name="name" placeholder="NAME" class="form-control" /> <bR><br>

                    <input type="text" name="alias" placeholder="ALIAS" class="form-control" /> <bR><br>

                    <input type="text" name="desc" placeholder="DESC" class="form-control" /> <bR><br>

                    <input type="text" name="year" placeholder="YEAR" class="form-control" /> <bR><br>

                    <input type="text" name="language" placeholder="LANGUAGE" class="form-control" /> <br><br>
                    
                    <input type="text" name="episode" placeholder="EPISODE" class="form-control" /> <br><br>
                    
                    <input type="text" name="rating" placeholder="RATING" class="form-control" /> 

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